from flask_restful import Resource
from flask import request

#Datos de prueba JSON

PROFESORES= {
    1: { 'nombre':'Diego','apellido':'Quiroga','dni':'39999998','email':'diegoq@gymla.com.ar','telefono':'2615597852'},
    2: { 'nombre':'Jaime','apellido':'Costarelli','dni':'39523789','email':'jaimec@gymla.com.ar','telefono':'2615524789'},
    3: { 'nombre':'Federico','apellido':'Jardel','dni':'39254110','email':'fedej@gymla.com.ar','telefono':'2615520317'},
    4: { 'nombre':'Ana','apellido':'Jaliff','dni':'39254111','email':'anajf@gymla.com.ar','telefono':'2615520318'},
    5: { 'nombre':'Enzo','apellido':'Galeana','dni':'39254112','email':'enzogal@gymla.com.ar','telefono':'2615520319'},
    6: { 'nombre':'Cristian','apellido':'Escudero','dni':'39254113','email':'cescudero@gymla.com.ar','telefono':'2615520320'},
    7: { 'nombre':'Juan','apellido':'Perez','dni':'39254254','email':'juanp@gymla.com.ar','telefono':'2615520321'},
    8: { 'nombre':'Pedro','apellido':'Gomez','dni':'39254915','email':'pedrogom@gymla.com.ar','telefono':'2615520322'},
    9: { 'nombre':'Maria','apellido':'Gonzalez','dni':'39254316','email':'mariagon@gymla.com.ar','telefono':'2615520323'},
   10: { 'nombre':'Sofia','apellido':'Bauco','dni':'39254127','email':'soffb@gymla.com.ar','telefono':'2615520324'},
}
#Definos el recurso 

# Definimos la clase Profesor y le indicamos que va a ser de tipo Resource
class UsuarioProfesor(Resource):
    
    #Obtenemos el Recurso
    def get(self, id):
        
        #Verificacion que existe el Profesor
        if int(id) in PROFESORES:
            
            #Retornamos el Profesor
            return PROFESORES[int(id)]

        #Retornamos un mensaje de exito
        return '', 201

    #Modificamos el Recurso PROFESOR
    def put(self, id):
        
        if int(id) in PROFESORES:
            
            #Guardamos el Profesor
            profesor = PROFESORES[int(id)]
            #Traemos el JSON (Body)
            data = request.get_json()
            #Lo reemplazamos
            profesor.update(data)
            
            #retornamos mensaje de exito
            return '', 201
        
        #Si no existe el Profesor retornamos un error 404
        return {'error': 'Profesor no encontrado'}, 404
    

