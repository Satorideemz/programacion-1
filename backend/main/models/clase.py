from .. import db

import json
from datetime import datetime


#Se define la tabla intermedia

ProfesorClases = db.Table("profesorclases",
                          
    db.Column("id_Clase",db.Integer,db.ForeignKey("clase.id_Clase"),primary_key=True),
    db.Column("id_Profesor",db.Integer,db.ForeignKey("usuario_profesor.id_Profesor"),primary_key=True)
    )


class Clase(db.Model):
    
    id_Clase = db.Column(db.Integer, primary_key=True)
    detalles = db.Column(db.String(300), nullable=False)
    dia = db.Column(db.String(15), nullable=False)
    horaFin = db.Column(db.DateTime, nullable=False)
    horaInicio = db.Column(db.DateTime, nullable=False)
    profesorclases = db.relationship('UsuarioProfesor', secondary=ProfesorClases, backref=db.backref('clases', lazy='dynamic'))
    


    def __repr__(self):
        return '<Clase: %r >' % (self.detalles)
    
    
    def to_json(self):
        clase_json = {
            'id_Clase' : self.id_Clase,
            'detalles' : str(self.detalles),
            'dia' : str(self.dia),
            'horaFin' : str(self.horaFin.strftime("%H:%M")),
            'horaInicio' : str(self.horaInicio.strftime("%H:%M")),

        }
        return clase_json
    
    def to_json_short(self):
        clase_json = {
            'id_Clase' : self.id_Clase,
            'detalles' : str(self.detalles),
            'dia' : str(self.dia),
            'horaFin' : str(self.horaFin.strftime("%H:%M")),
            'horaInicio' : str(self.horaInicio.strftime("%H:%M")),
        }
        return clase_json
    

    def to_json_complete(self):
        profesorclase = [profeclase.to_json() for profeclase in self.profesorclase2]
        clase_json = {
            'id_Clase' : self.id_Clase,
            'detalles' : str(self.detalles),
            'dia' : str(self.dia),
            'horaFin' : str(self.horaFin.strftime("%H:%M")),
            'horaInicio' : str(self.horaInicio.strftime("%H:%M")),
            'profesorclase' : profesorclase
        }
        return clase_json
    









    @staticmethod
    
    def from_json(clase_json):
        
        id_Clase = clase_json.get('id_Clase')
        detalles = clase_json.get('detalles')
        dia = clase_json.get('dia')
        horaFin = datetime.strptime(clase_json.get('horaFin'), "%H:%M")
        horaInicio = datetime.strptime(clase_json.get('horaInicio'), "%H:%M")
        
        

        return Clase(id_Clase = id_Clase,
                     detalles = detalles,
                     dia = dia,
                     horaFin = horaFin,
                     horaInicio = horaInicio)
        
        

        
    


