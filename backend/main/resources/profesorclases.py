from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import ClaseModel


#Datos de prueba en JSON
#USUARIOSPROFESORES = {
#    1: {'nombre':'Sofia', 'clases':'Yoga'},
#    2: {'nombre':'Analia', 'clases':'Cross fit'},
#    3: {'nombre':'Veronica', 'clases':'Pilates'},
#    4: {'nombre':'Cristian', 'clases':'Gym_maquinas'}
#}

#Coleccion de recurso Profesores
class ProfesorClases(Resource):
    #obtener lista de los profesores
    def get(self):
        profesores = db.session.query(ClaseModel).all()
        return jsonify([profesor.to_json() for profesor in profesores])