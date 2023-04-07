from flask_restful import Resource
from flask import request



USUARIOSALUMNOS = {
    1: {'nombre':'Juan', 'apellido':'Perez', 'dni':'3234653','telefono':'3432423', 'email':'a@mail.com'},
    2: {'nombre':'Pedro', 'apellido':'Gonzales', 'dni':'1534653','telefono':'4132423', 'email':'b@mail.com'}
}


class UsuariosAlumnos(Resource):
    #obtener lista de los alumnos
    def get(self):
        return USUARIOSALUMNOS
    #insertar alumno
    def post(self):
        usuariosalumnos = request.get_json()
        id = int(max(USUARIOSALUMNOS.keys()))+1
        USUARIOSALUMNOS[id] = usuariosalumnos
        return USUARIOSALUMNOS[id], 201