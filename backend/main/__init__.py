from flask import Flask
from dotenv import load_dotenv
import os
#Importamos nuevas librerias clase 3
from flask_restful import Api #Agrego la clase API

#Importo dir de recursos
import main.resources as resources


#Importo SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

#Inicio Restful
api = Api()

#Inicio SQLAlchemy
db = SQLAlchemy()


#Vamos a crear un metodo que inicializara la app y todos los modulos
def create_app():
    #inicio Flask
    app = Flask(__name__)
    #variables de entono
    load_dotenv()

    if not os.path.exists(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):
        os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))

    app.config['SQLALCHEMY_TRACK_NOTIFICATIONS']= False
    #Url de configuracion de bd
    app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')    
    db.init_app(app)

    api.add_resource(resources.UsuariosResource, '/usuarios')

    api.add_resource(resources.UsuarioResource, '/usuario/<id>')

    api.add_resource(resources.UsuariosAlumnosResource, '/usuariosalumnos')

    api.add_resource(resources.UsuarioAlumnoResource, '/usuarioalumno/<id>')

    api.add_resource(resources.UsuarioProfesorResource, '/usuarioprofesor/<id>')

    api.add_resource(resources.PlanificacionesResource, '/planificaciones')

    api.add_resource(resources.PlanificacionResource, '/planificacion/<id>')

    api.add_resource(resources.PlanificacionAlumnoResource, '/planificacionalumno/<id>')

    api.add_resource(resources.ProfesorClasesResource, '/clases')
    
    api.add_resource(resources.PagoResource, '/pago/<id>')

    api.add_resource(resources.LoginResource, '/login')

    #Cargar la aplicacion en la API de Flask Restful
    #es para que la aplicacion de flask funcione como API
    api.init_app(app)
    #Por ultimo retornamos la aplicacion iniializada
    return app