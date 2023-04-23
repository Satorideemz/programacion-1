from .. import db
from datetime import datetime

class Clase(db.Model):
    
    id_Clase = db.Column(db.Integer, primary_key=True)
    detalles = db.Column(db.String(300), nullable=False)
    dia = db.Column(db.String(15), nullable=False)
    horaFin = db.Column(db.DateTime, nullable=False)
    horaInicio = db.Column(db.DateTime, nullable=False)
    
    
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
        
        

        
    


