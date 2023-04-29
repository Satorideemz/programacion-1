from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import PlanificacionModel

# Datos de prueba en JSON


class PlanificacionAlumno(Resource):
    
    def get(self, id):
        
        planificacion = db.session.query(PlanificacionModel).get_or_404(id)
        return planificacion.to_json()
        
    