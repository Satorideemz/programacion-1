from flask_restful import Resource
from flask import request
from main.models import PlanificacionModel
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

        return jsonify ({'planificaciones': [planificacion.to_json() for planificacion in planificaciones],
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