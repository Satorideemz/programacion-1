from flask_restful import Resource
from flask import request
from main.models import PlanificacionModel
from flask import jsonify
from .. import db

#Datos de prueba en JSON
#PlanificacionModel = {
#    1: {'nombre':'tren superior y piernas', 'nivel de intencidad':'5', 'estado':'actualizado'},
#    2: {'nombre':'principiante', 'nivel de intencidad':'1', 'estado':'desactualizado'},
#    3: {'nombre':'ADM de chocolate', 'nivel de intencidad':'3', 'estado':'actualizado'}
#}

#Defino el recurso planificacion de profesores
class Planificacion(Resource): #A la clase planificacion le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self, id):
        
        planificacion = db.session.query(PlanificacionModel).get_or_404(id)
        return planificacion.to_json()
        
        
    #eliminar recurso
    def delete(self, id):
        
       planificacion = db.session.query(PlanificacionModel).get_or_404(id)
       db.session.delete(planificacion)
       db.session.commit()
       return '',204
        
        
    #Modificar el recurso planificacion / aca puedo cabiar el estado de una planificacion a actualizado o desactualizado, luego cuando programe hago una restrigcion para quesi no esta actualizado no se pueda usar
    def put(self, id):
        planificacion = db.session.query(PlanificacionModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(planificacion, key, value)
        db.session.add(planificacion)
        db.session.commit()
        return planificacion.to_json(), 201
    
    
class Planificaciones(Resource):
    
    #Obtenemos la coleccion de PROFESORES
    def get(self):
        planificaciones = db.session.query(PlanificacionModel).all()
        return jsonify([planificacion.to_json() for planificacion in planificaciones])
    
    #Insertamos un nuevo Profesor
    def post(self):
        planificacion = PlanificacionModel.from_json(request.get_json())
        db.session.add(planificacion)
        db.session.commit()
        return planificacion.to_json(), 201