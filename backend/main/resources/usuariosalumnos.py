from flask_restful import Resource
from flask import request
from flask import jsonify
from .. import db
from main.models import UsuariosAlumnosModel

#Defino el recurso Alumnos
class UsuarioAlumno(Resource): #A la clase alumno le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        return usuariosalumnos.to_json()

    #eliminar recurso
    def delete(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        db.session.delete(usuariosalumnos)
        db.session.commit()
        return '',204



    #Modificar el recurso alumno / aca puedo cabiar el estado de un alumno a activo 0 suspendido, luego cuando programe hago una restrigcion para quesi no esta activo no vea su planificacion
    def put(self, id):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).get_or_404(id)
        data = request.get_json().items()
        for key,value in data:
            setattr(usuariosalumnos,key,value)
        db.session.add(usuariosalumnos)
        db.session.commit()
        return usuariosalumnos.to_json(),201
       

class UsuariosAlumnos(Resource):
    #obtener lista de los alumnos
    def get(self):
        usuariosalumnos = db.session.query(UsuariosAlumnosModel).all()
        return jsonify([usuariosalumnos.to_json() for usuariosalumnos in usuariosalumnos])

    #insertar alumno
    def post(self):
        usuariosalumnos = UsuariosAlumnosModel.from_json(request.get_json())
        db.session.add(usuariosalumnos)
        db.session.commit()
        return usuariosalumnos.to_json(),201