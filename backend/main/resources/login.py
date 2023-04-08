from flask_restful import Resource
from flask import request

CUENTAS = {
    1: {'nombre_usuario':'Juan', 'tipo_usuario':'Alumno'},
    2: {'nombre_usuario':'Leonardo', 'tipo_usuario':'Profesor'},
    3: {'nombre_usuario':'Patricio', 'tipo_usuario':'Administrador'}
}


class Login(Resource):
    def post(self):
        usuario = request.get_json()
        id = int(max(CUENTAS.keys()))+1
        CUENTAS[id] = usuario
        return CUENTAS[id], 201