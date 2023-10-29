from flask_restful import Resource
from flask import request
from main.models import PlanificacionModel, UsuariosAlumnosModel
from main.models import ClaseModel
from flask import jsonify
from datetime import datetime
from sqlalchemy import func, desc, asc
from .. import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required


#Defino el recurso planificacion de profesores
class Planificacion(Resource): #A la clase planificacion le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    @role_required(roles = ["admin","profesor","alumno"]) 
    def get(self, id):
        
        planificacion = db.session.query(PlanificacionModel).get_or_404(id)
        current_identity = get_jwt_identity()
        if current_identity:
            return planificacion.to_json()
        else:
            return planificacion.to_json_short()        
        
    #eliminar recurso
    @role_required(roles = ["admin","profesor"])
    def delete(self, id):
        
       planificacion = db.session.query(PlanificacionModel).get_or_404(id)
       db.session.delete(planificacion)
       db.session.commit()
       return '',204
        
        
    
    #Modificar el recurso planificacion / aca puedo cabiar el estado de una planificacion a actualizado o desactualizado, luego cuando programe hago una restrigcion para quesi no esta actualizado no se pueda usar
    @role_required(roles = ["admin","profesor"])
    def put(self, id):
        planificacion = db.session.query(PlanificacionModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(planificacion, key, value)
        db.session.add(planificacion)
        db.session.commit()


        jsonplanificaciones=planificacion.to_json()
        if 'id_Clase' in jsonplanificaciones and jsonplanificaciones['id_Clase'] is not None :

            clase_asociada=db.session.query(ClaseModel).get_or_404(jsonplanificaciones['id_Clase'])
            clase_asociada.planificacionclases.append(planificacion)

        db.session.add(planificacion)
        db.session.commit()

        return planificacion.to_json(), 201
    
    
class Planificaciones(Resource):
    
    #Obtenemos la coleccion de planificaciones
    @role_required(roles = ["admin","profesor","alumno"])
    def get(self):
        page = 1
        per_page = 1
        planificaciones = db.session.query(PlanificacionModel)


        if request.args.get('page'):
            page = int(request.args.get('page'))
        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #solo traemos la planificacion mas reciente a la pagina
        if request.args.get('get_by_date'):
            planificaciones = planificaciones.order_by(desc(PlanificacionModel.fecha))

        planificaciones = planificaciones.paginate(page=page, per_page=per_page, error_out=True, max_per_page=1)

        #Filtro las planificaciones segun el id del usuario
        #Consul en SQL
        #SELECT p*
        #FROM UsuarioAlumno ua
        #JOIN AlumnosClase ac ON ua.id_usuario = ac.id_alumnos
        #JOIN Clase c ON ac.id_clases = c.id_clases
        #JOIN Planificaciones_Clase pc ON c.id_clases = pc.id_clases
        #JOIN Planificaciones p ON pc.id_planificaciones = p.id_planificaciones
        #WHERE ua.id_usuario = <ID_DEL_ALUMNO>;

    
        # Luego, puedes devolver el resultado como JSON
        return jsonify({'planificaciones': [planificacion.to_json() for planificacion in planificaciones],
                        'total': planificaciones.total,
                        'pages': planificaciones.pages,
                        'page': page
        })


    #Insertamos una nuevo planificacion
    @role_required(roles = ["admin","profesor"])
    def post(self):
        planificacion = PlanificacionModel.from_json(request.get_json())
        db.session.add(planificacion)
        db.session.commit()
        return planificacion.to_json(), 201
    

    
    def post(self):
        jsonplanificaciones=request.get_json()
        planificaciones =PlanificacionModel.from_json(jsonplanificaciones)

        #en esta parte del codigo compruebo si profesor se le asigna una clase al momento de darlo de alta
        #como es opcional, si no se ingresa clase simplemente no lo asocia
        if 'id_Clase' in jsonplanificaciones and jsonplanificaciones['id_Clase'] is not None :
            print(jsonplanificaciones['id_Clase'])
            clase_asociada=db.session.query(ClaseModel).get_or_404(jsonplanificaciones['id_Clase'])
            clase_asociada.planificacionclases.append(planificaciones)

        db.session.add(planificaciones)
        db.session.commit()
        return planificaciones.to_json(),201    