from flask_restful import Resource
from flask import request
from flask import jsonify
from datetime import datetime
from .. import db
from main.models import UsuariosAlumnosModel, UsuarioModel
from main.models import ClaseModel
from sqlalchemy import func, desc, asc, or_
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required

#Defino el recurso Alumnos
class UsuarioAlumno(Resource): #A la clase alumno le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    @role_required(roles = ["admin","profesor","alumno"])
    def get(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        current_identity = get_jwt_identity()
        if current_identity:
            return usuariosalumnos.to_json_complete()
        else:
            return usuariosalumnos.to_json()

    #eliminar recurso
    @role_required(roles = ["admin","profesor"])
    def delete(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        db.session.delete(usuariosalumnos)
        db.session.commit()
        return '',204

    #Modificar el recurso alumno / aca puedo cabiar el estado de un alumno a activo 0 suspendido, luego cuando programe hago una restrigcion para quesi no esta activo no vea su planificacion
    @role_required(roles = ["admin","profesor"])
    def put(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:

        #si el atributo fecha esta en el json que envio como parametro
        #convierte el string en formato fecha
            try:
                if key == 'fecha_pago':
                    value = datetime.strptime(value, "%d-%m-%Y")
            except ValueError:
                return {"message": "Formato incorrecto en la fecha [dd-mm-yyyy]."}, 400
                                            
            setattr(usuariosalumnos,key,value)
        db.session.add(usuariosalumnos)
        db.session.commit()






        #si se modifica un alumno y resulta ser que se le asigna una clase
        #se realiza dicha asociacion
        jsonalumnos = usuariosalumnos.to_json()
        if 'id_Clase' in jsonalumnos and jsonalumnos['id_Clase'] is not None :

            clase_asociada=db.session.query(ClaseModel).get_or_404(jsonalumnos['id_Clase'])
            clase_asociada.alumnoclases.append(usuariosalumnos)

        db.session.add(usuariosalumnos)
        db.session.commit()

        return usuariosalumnos.to_json(),201
       

class UsuariosAlumnos(Resource):
    #obtener lista de los alumnos

    @role_required(roles = ["admin","profesor"])
    def get(self):
        page = 1
        per_page = 4

        usuariosalumnos = db.session.query(UsuariosAlumnosModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))

        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #traemos los 30 primeros profesores ordenados por su estado de cuenta siendo primeros los que estan al dia
        if request.args.get('get_by_status'):
            usuariosalumnos = usuariosalumnos.order_by(desc(UsuariosAlumnosModel.estado_de_la_cuenta))

        #traigo el usuario alumno puntual que deseo dar de alta editar o borrar
        if request.args.get('user_abm'):
            usuariosalumnos= usuariosalumnos.filter(UsuariosAlumnosModel.id_Usuario == request.args.get('user_abm'))

        usuariosalumnos = usuariosalumnos.paginate(page=page, per_page=per_page, error_out=True, max_per_page=2)

        # Barra de busqueda
        if request.args.get('search'):
            search_param = request.args.get('search')
            page = int(request.args.get('page', 1))
            per_page = int(request.args.get('per_page', 4))  

            # Filtro por nombre o por apellido usando paginacion
            usuarios_query_search = (
                db.session.query(UsuarioModel)
                .join(UsuariosAlumnosModel, UsuariosAlumnosModel.id_Usuario == UsuarioModel.id_Usuario)
                .filter(
                    or_(
                        UsuarioModel.nombre.like(f'%{search_param}%'),
                        UsuarioModel.apellido.like(f'%{search_param}%')
                    )
                )
                .paginate(page=page, per_page=per_page)
            )

            # Fetch paginated search results
            search_results = usuarios_query_search.items

            # Return paginated search results along with total count, total pages, and current page number
            return jsonify({
                'alumnos': [usuario.to_json_full_name() for usuario in search_results],
                'total': usuarios_query_search.total,  # Total count of search results (not the total count of all users)
                'pages': usuarios_query_search.pages,  # Total number of pages based on total results and items per page
                'page': usuarios_query_search.page  # Current page number
            })

            #consulta original
            #SELECT usuario.nombre,usuario.apellido FROM usuario 
            #JOIN alumno ON (usuario.id = alumnno=id)
            #AND ( alumno.nombre LIKE '%sdfsd%' OR alumno.apellido LIKE '%sdfsd%'  )

            #search_result = [usuario.to_json_full_name() for usuario in usuarios_query_search]

            #Aplico el filtro de busqueda con paginacion


        return jsonify ({'alumnos': [usuarioalumno.to_json() for usuarioalumno in usuariosalumnos],
                  'total': usuariosalumnos.total,
                  'pages': usuariosalumnos.pages,
                  'page': page
                })



    @role_required(roles = ["admin","profesor"])
    #insertar alumno
    def post(self):
        jsonalumnos = request.get_json()
        usuariosalumnos = UsuariosAlumnosModel.from_json(jsonalumnos)

        #en esta parte del codigo compruebo si alumno se le asigna una clase al momento de darlo de alta
        #como es opcional, si no se ingresa clase simplemente no lo asocia
        if 'id_Clase' in jsonalumnos and jsonalumnos['id_Clase'] is not None :
            print(jsonalumnos['id_Clase'])
            clase_asociada=db.session.query(ClaseModel).get_or_404(jsonalumnos['id_Clase'])
            clase_asociada.alumnoclases.append(usuariosalumnos)

        db.session.add(usuariosalumnos)
        db.session.commit()
        return usuariosalumnos.to_json(),201