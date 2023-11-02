from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import ClaseModel, UsuarioModel,UsuarioProfesorModel,UsuariosAlumnosModel

from sqlalchemy.orm import aliased

from sqlalchemy import func, desc, asc
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required

class ProfesorClase(Resource):
    
    def get(self,id):
        clase= db.session.query(ClaseModel).get_or_404(id)

        return clase.to_json()
        


#Coleccion de recurso Profesores
class ProfesorClases(Resource):
    #obtener lista de los profesores
    
    #def get(self):
    #    profesores = db.session.query(ClaseModel).order_by(desc(ClaseModel.horaInicio))
    #    return jsonify([profesor.to_json() for profesor in profesores])
    #metodo antiguo duplicado

    @role_required(roles= ["admin","profesor"])
    def get(self):
        # Crear alias para las tablas
            

            if request.args.get('id_alumno'):
            # Define el parámetro de búsqueda
                UsuariosAlumnosModel.id_Alumno = request.args.get('id_alumno')

                # Consulta para obtener planificaciones relacionadas con el alumno
                alumnos_query = (
                    db.session.query(ClaseModel)
                    .join(ClaseModel.alumnoclases, alumnos.id_Alumno == UsuariosAlumnosModel.id_Usuario)
                    .join(ClaseModel, ClaseModel.id_Clase == UsuariosAlumnosModel.id_Clases)
                    .join(ClaseModel.alumnoclases, ClaseModel.alumnoclases.id_Clases == ClaseModel.id_Clases)
                    .filter(ClaseModel.alumnoclases.id_alumno == UsuariosAlumnosModel.id_Alumno)
                )

    

    @role_required(roles = ["admin","profesor","alumno"])
    def get(self):
        page = 1
        per_page = 10

        clases = db.session.query(ClaseModel)

        

        clases = clases.paginate(page=page, per_page=per_page, error_out=True, max_per_page=10)

        if request.args.get('page'):
            page = int(request.args.get('page'))


        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #traemos las 10 clases ordenadas por la que comience mas temprano
        if request.args.get('get_by_start_hour'):
            clases = clases.order_by(asc(ClaseModel.horaInicio))


        if request.args.get('view_preview'):
            preview = [clase.to_json_preview() for clase in clases]
            return jsonify ({'clases': preview,
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })

        if request.args.get('view_full'):
            full = [clase.to_json_full_view() for clase in clases]
            return jsonify ({'clases': full,
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })

        return jsonify ({'clases': [clase.to_json() for clase in clases],
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })




    def post(self):
        clase = ClaseModel.from_json(request.get_json())
        db.session.add(clase)
        db.session.commit()
        return clase.to_json(), 201