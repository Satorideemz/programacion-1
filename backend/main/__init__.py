from flask import Flask
from dotenv import load_dotenv

#Importamos nuevas librerias clase 3
from flask_restful import Api #Agrego la clase API

#Importo dir de recursos
import main.resources as resources

#Inicio Restful
api = Api()

#Vamos a crear un metodo que inicializara la app y todos los modulos
def create_app():
    #inicio Flask
    app = Flask(__name__)
    #variables de entono
    load_dotenv()
    
    api.add_resource(resources.UsuariosResource, '/usuarios')
    
    api.add_resource(resources.UsuariosAlumnosResource, '/usuariosalumnos')
    
    api.add_resource(resources.UsuarioResource, '/usuario/<id>')

    api.add_resource(resources.UsuarioAlumnoResource, '/usuarioalumno/<id>')
   
    api.add_resource(resources.UsuariosProfesoresResource, '/usuariosprofesores')
    
    api.add_resource(resources.PlanificacionResource, '/planificacion/<id>')
    
    #Cargar la aplicacion en la API de Flask Restful
    #es para que la aplicacion de flask funcione como API
    api.init_app(app)
    #Por ultimo retornamos la aplicacion iniializada
    return app