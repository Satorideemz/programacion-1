from flask_restful import Resource
from flask import request

#Datos de prueba en JSON

USUARIOS = {
    1: {'nombre':'Boby', 'raza':'Obejero Aleman'},
    2: {'nombre':'Peter', 'raza':'Caniche'}
}


#Defino el recurso Usuario
class Usuario(Resource): 
    #obtener recurso
    def get(self, id):
        #Verifico que exista el usuario
        if int(id) in USUARIOS:
            #retorno animal
            return USUARIOS[int(id)]
        #Si no existe 404
        return '', 404
    
    def put(self, id):
        if int(id) in USUARIOS:
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
    #obtener lista de los animales
    def get(self):
        return USUARIOS
    #insertar recurso
    def post(self):
        animal = request.get_json()
        id = int(max(USUARIOS.keys()))+1
        USUARIOS[id] = animal
        return USUARIOS[id], 201