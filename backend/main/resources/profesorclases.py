from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import ClaseModel




#Coleccion de recurso Profesores
class ProfesorClases(Resource):
    #obtener lista de los profesores
    def get(self):
        profesores = db.session.query(ClaseModel).all()
        return jsonify([profesor.to_json() for profesor in profesores])


#    def post(self):
#        profesores = ClaseModel.from_json(request.get_json())
#        db.session.add(profesores)
#        db.session.commit()
#        return profesores.to_json(), 201