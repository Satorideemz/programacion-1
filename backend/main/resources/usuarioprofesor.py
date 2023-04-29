from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import UsuarioProfesorModel

class UsuarioProfesor(Resource):
    
    #Obtenemos el Recurso
    def get(self, id):
        usuarioprofesor = db.session.query(UsuarioProfesorModel).get_or_404(id)
        return usuarioprofesor.to_json()
    
    #Modificamos el Recurso PROFESOR
    def put(self, id):
        usuarioprofesor = db.session.query(UsuarioProfesorModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(usuarioprofesor,key,value)
        db.session.add(usuarioprofesor)
        db.session.commit()
        return usuarioprofesor.to_json(),201
        

