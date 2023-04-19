from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import UsuarioModel

#Datos de prueba en JSON


#Ya no se necesitan mas estos json, ahora que tenemos la DB
#USUARIOS = {
#    1: {'nombre':'Juan', 'tipo_empleado':'Administrador'},
#    2: {'nombre':'Pedro', 'tipo_empleado':'Administrador'}
#}


#Defino el recurso Usuario
class Usuario(Resource): 
    #obtener recurso
    def get(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        return usuario.to_json()
    
    def put(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
    
    def delete(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return '',204


#Coleccion de recurso Usuarios
class Usuarios(Resource):
    #obtener lista de usuarios
    def get(self):
        usuarios = db.session.query(UsuarioModel).all()
        return jsonify([usuario.to_json() for usuario in usuarios])
    
    #insertar recurso
    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201