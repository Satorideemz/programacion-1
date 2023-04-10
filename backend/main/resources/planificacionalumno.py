from flask_restful import Resource
from flask import request
# Datos de prueba en JSON

ALUMNOS = {
    1: {'nombre': 'Pepe','Planificacion': '1', 'estado': 'activo'},
    2: {'nombre': 'Peter',  'Planificacion': '2', 'estado': 'activo'},
    3: {'nombre': 'Ortencia','Planificacion': '3', 'estado': 'activo'},
}

class PlanificacionAlumno(Resource):
    # Obtener planificaciones por alumno
    def get(self, id):
    #Verificacion que existe el Profesor
        if int(id) in ALUMNOS: 
            #Retornamos el Profesor
            return ALUMNOS[int(id)]
        #Retornamos un mensaje de exito
        return '', 201
           
    