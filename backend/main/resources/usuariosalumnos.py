from flask_restful import Resource
from flask import request



USUARIOSALUMNOS = {
    1: {'nombre':'Juan', 'apellido':'Perez', 'dni':'3234653','telefono':'3432423', 'email':'a@mail.com', 'edad':'50', 'esatado':'activo', 'Planificacion':'1'},
    2: {'nombre':'Pedro', 'apellido':'Gonzales', 'dni':'1534653','telefono':'4132423', 'email':'b@mail.com', 'edad':'45', 'esatado':'activo', 'Planificacion':'2'},
    3: {'nombre':'Pepe', 'apellido':'Sancho', 'dni':'3234553','telefono':'3435623', 'email':'a@mail.com', 'edad':'55', 'esatado':'activo', 'Planificacion':'1'},
    4: {'nombre':'Peter', 'apellido':'Lopez', 'dni':'3234560','telefono':'3435656', 'email':'a@mail.com', 'edad':'20', 'esatado':'suspendido', 'Planificacion':'2'},
    5: {'nombre':'Ortencia', 'apellido':'Ramirez', 'dni':'2234553','telefono':'3435000', 'email':'a@mail.com','edad':'95', 'esatado':'activo', 'Planificacion':'3'}

}

    
#Defino el recurso Alumnos
class UsuarioAlumno(Resource): #A la clase alumno le indico que va a ser del tipo recurso(Resource)
    #obtener recurso
    def get(self, id):
        #Verifico que exista el alumno
        if int(id) in USUARIOSALUMNOS:
            #retorno animal
            return USUARIOSALUMNOS[int(id)]
        #Si no existe 404
        return '', 404
    #eliminar recurso
    def delete(self, id):
        #Verifico que exista el animal
        if int(id) in USUARIOSALUMNOS:
            #elimino alumno
            del USUARIOSALUMNOS[int(id)]
            return '', 204
        #Si no existe 404
        return '', 404
    #Modificar el recurso alumno / aca puedo cabiar el estado de un alumno a activo 0 suspendido, luego cuando programe hago una restrigcion para quesi no esta activo no vea su planificacion
    def put(self, id):
        if int(id) in USUARIOSALUMNOS:
            animal = USUARIOSALUMNOS[int(id)]
            data = request.get_json()
            animal.update(data)
            return '', 201
        return '', 404
    

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