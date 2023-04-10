from flask_restful import Resource
from flask import request

#Datos de prueba en JSON

USUARIOS = {
    1: {'nombre':'Juan', 'tipo_empleado':'Administrador'},
    2: {'nombre':'Pedro', 'tipo_empleado':'Administrador'}
}


#Defino el recurso Usuario
class Usuario(Resource): 
    #obtener recurso
    def get(self, id):
        #Verifico que exista el usuario
        if int(id) in USUARIOS:

            return USUARIOS[int(id)]
        #Si no existe 404
        return '', 404
    
    def put(self, id):
        if int(id) in USUARIOS:
            #edito usuario
            usuario = USUARIOS[int(id)]
            data = request.get_json()
            usuario.update(data)
            return '', 201
        return '', 404
    
    def delete(self, id):
        if int(id) in USUARIOS:
            #elimino usuario
            del USUARIOS[int(id)]
            return '', 204
        #Si no existe 404
        return '', 404


#Coleccion de recurso Usuarios
class Usuarios(Resource):
    #obtener lista de usuarios
    def get(self):
        return USUARIOS
    #insertar recurso
    def post(self):
        usuario = request.get_json()
        id = int(max(USUARIOS.keys()))+1
        USUARIOS[id] = usuario
        return USUARIOS[id], 201