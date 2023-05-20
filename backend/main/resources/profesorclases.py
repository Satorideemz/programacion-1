from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import ClaseModel
from sqlalchemy import func, desc, asc
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required

#Coleccion de recurso Profesores
class ProfesorClases(Resource):
    #obtener lista de los profesores
    
    #def get(self):
    #    profesores = db.session.query(ClaseModel).order_by(desc(ClaseModel.horaInicio))
    #    return jsonify([profesor.to_json() for profesor in profesores])
    #metodo antiguo duplicado


    @role_required(roles = ["admin"])
    def get(self):
        page = 1
        per_page = 10

        clases = db.session.query(ClaseModel)


        if request.args.get('page'):
            page = int(request.args.get('page'))

        if request.args.get('per_page'):
            per_page = int(request.args.get('per_page'))

        #traemos las 10 clases ordenadas por la que comience mas temprano
        if request.args.get('get_by_start_hour'):
            clases = clases.order_by(asc(ClaseModel.horaInicio))


        clases = clases.paginate(page=page, per_page=per_page, error_out=True, max_per_page=10)

        return jsonify ({'alumnos': [clase.to_json() for clase in clases],
                  'total': clases.total,
                  'pages': clases.pages,
                  'page': page
                })















#    def post(self):
#        profesores = ClaseModel.from_json(request.get_json())
#        db.session.add(profesores)
#        db.session.commit()
#        return profesores.to_json(), 201