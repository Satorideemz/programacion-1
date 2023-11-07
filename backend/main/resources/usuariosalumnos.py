from flask_restful import Resource
from flask import request
from flask import jsonify
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
    # Obtener lista de los alumnos
    @role_required(roles=["admin", "profesor"])
    def get(self):
        page = 1
        per_page = 2
        alumnos_json = None  # Inicializa la variable para almacenar los datos de los alumnos de la clase

        usuariosalumnos = db.session.query(UsuariosAlumnosModel)

        if request.args.get('page'):
            page = int(request.args.get('page'))

        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        # Ordenar por estado de cuenta
        if request.args.get('get_by_status'):
            usuariosalumnos = usuariosalumnos.order_by(desc(UsuariosAlumnosModel.estado_de_la_cuenta))

        # Filtrar por usuario
        if request.args.get('user_abm'):
            usuariosalumnos = usuariosalumnos.filter(UsuariosAlumnosModel.id_Usuario == request.args.get('user_abm'))

        # Paginación
        usuariosalumnos = usuariosalumnos.paginate(page=page, per_page=per_page, error_out=True, max_per_page=2)

        # Barra de búsqueda
        if request.args.get('search'):
            search_param = request.args.get('search')
            page = int(request.args.get('page', 1))
            per_page = int(request.args.get('per_page', 4))

            # Filtrar por nombre o apellido usando paginación
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

            # Obtener resultados de búsqueda paginados
            search_results = usuarios_query_search.items

            # Devolver resultados de búsqueda paginados junto con el recuento total, páginas totales y número de página actual
            return jsonify({
                'alumnos': [usuario.to_json_full_name() for usuario in search_results],
                'total': usuarios_query_search.total,
                'pages': usuarios_query_search.pages,
                'page': usuarios_query_search.page
            })

        # Nueva condición para obtener alumnos de una clase específica
        if request.args.get('asistencias'):
            clase_id_clickeada = int(request.args.get('clase_id'))
            # Realiza la consulta para obtener los alumnos relacionados con la clase clickeada
            alumnos_de_clase = (
                db.session.query(UsuariosAlumnosModel.id_Alumno, UsuarioModel.nombre, UsuarioModel.apellido)
                .join(UsuariosAlumnosModel, UsuariosAlumnosModel.id_Alumno == UsuarioModel.id_Usuario)
                .filter(UsuariosAlumnosModel.id_Clase == clase_id_clickeada)
                .all()
            )

            # Convierte los resultados en objetos JSON
            alumnos_json = [{'id_Alumno': alumno.id_Alumno, 'nombre': alumno.nombre, 'apellido': alumno.apellido} for alumno in alumnos_de_clase]

            # Si se obtienen datos de la clase, devolver esos datos
            if alumnos_json:
                return jsonify({'alumnos': alumnos_json})

        # Si no se obtienen datos de la clase, devolver los datos de los alumnos generales
        return jsonify({'alumnos': [usuarioalumno.to_json() for usuarioalumno in usuariosalumnos],
                        'total': usuariosalumnos.total,
                        'pages': usuariosalumnos.pages,
                        'page': page})




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