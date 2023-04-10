from flask_restful import Resource
#from flask import Request

#Datos de prueba en JSON
USUARIOSPROFESORES = {
    1: {'nombre':'Sofia', 'clases':'Yoga'},
    2: {'nombre':'Analia', 'clases':'Cross fit'},
    3: {'nombre':'Veronica', 'clases':'Pilates'},
    4: {'nombre':'Cristian', 'clases':'Gym_maquinas'}
}

#Coleccion de recurso Profesores
class ProfesorClases(Resource):
    #obtener lista de los profesores
    def get(self):
        return USUARIOSPROFESORES