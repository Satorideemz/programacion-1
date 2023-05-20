from flask_restful import Resource
from main.models import UsuarioModel
from .. import db
from flask import request

#CUENTAS = {
#    1: {'nombre_usuario':'Juan', 'tipo_usuario':'Alumno'},
#    2: {'nombre_usuario':'Leonardo', 'tipo_usuario':'Profesor'},
#    3: {'nombre_usuario':'Patricio', 'tipo_usuario':'Administrador'}
#}


class Login(Resource):
    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
#Preguntar al profesor!!