from flask_restful import Resource
from flask import request

#Datos de prueba en JSON
PLANIFICACIONES = {
    1: {'nombre':'tren superior y piernas', 'nivel de intencidad':'5', 'estado':'actualizado'},
    2: {'nombre':'principiante', 'nivel de intencidad':'1', 'estado':'desactualizado'},
    3: {'nombre':'ADM de chocolate', 'nivel de intencidad':'3', 'estado':'actualizado'}
}

#Defino el recurso planificacion
class Planificacion(Resource): #A la clase planificacion le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self, id):
        #Verifico que exista la planificacion
        if int(id) in PLANIFICACIONES:
            #retorno planificacion
            return PLANIFICACIONES[int(id)]
        #Si no existe 404
        return '', 404
    #eliminar recurso
    def delete(self, id):
        #Verifico que exista la planificacion
        if int(id) in PLANIFICACIONES:
            #elimino planificacion
            del PLANIFICACIONES[int(id)]
            return '', 204
        #Si no existe 404
        return '', 404
    #Modificar el recurso planificacion / aca puedo cabiar el estado de una planificacion a actualizado o desactualizado, luego cuando programe hago una restrigcion para quesi no esta actualizado no se pueda usar
    def put(self, id):
        if int(id) in PLANIFICACIONES:
            animal = PLANIFICACIONES[int(id)]
            data = request.get_json()
            animal.update(data)
            return '', 201
        return '', 404