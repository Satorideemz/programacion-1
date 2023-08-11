from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import UsuarioModel
from sqlalchemy import func, desc
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import role_required

#Defino el recurso Usuario
class Usuario(Resource): 
    
    #obtener recurso
    @role_required(roles = ["admin"]) 
    def get(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        current_identity = get_jwt_identity()
        # si el rol tiene permiso le devuelve json completo
        if current_identity:
            return usuario.to_json_complete()
        else:
            return usuario.to_json()
        
    @role_required(roles = ["admin"])
    def put(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(usuario, key, value)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
    
    @role_required(roles = ["admin"])
    def delete(self, id):
        usuario = db.session.query(UsuarioModel).get_or_404(id)
        db.session.delete(usuario)
        db.session.commit()
        return '',204


#Coleccion de recurso Usuarios
class Usuarios(Resource):
    #obtener lista de usuarios
    @role_required(roles = ["admin"])
    def get(self):
        usuarios = db.session.query(UsuarioModel).all()
        return jsonify([usuario.to_json_complete() for usuario in usuarios])
    
    #insertar recurso
    @role_required(roles = ["admin"])
    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201