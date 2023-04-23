from .. import db
from datetime import datetime

class Planificacion(db.Model):
    
    id_planificacion = db.Column(db.Integer, primary_key=True)
    detalles = db.Column(db.String(300), nullable=False)
    estado = db.Column(db.String(15), nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    
    
    def __repr__(self):
        return '<Planificacion: %r >' % (self.detalles)
    
    def to_json(self):
        planificacion_json = {
            'id_planificacion' : self.id_planificacion,
            'detalles' : str(self.detalles),
            'estado' : str(self.estado),
            'fecha' : str(self.fecha.strftime("%d-%m-%Y")),
        }
        return planificacion_json
    
    def to_json_short(self):
        planificacion_json = {
            'id_planificacion' : self.id_planificacion,
            'detalles' : str(self.detalles),
            'estado' : str(self.estado),
            'fecha' : str(self.fecha.strftime("%d-%m-%Y")),
        }
        return planificacion_json
    
    @staticmethod
    
    def from_json(planificacion_json):
        
        id_planificacion = planificacion_json.get('id_planificacion')
        detalles = planificacion_json.get('detalles')
        estado = planificacion_json.get('estado')
        fecha = datetime.strptime(planificacion_json.get('fecha'), "%d-%m-%Y")
        
        
        return Planificacion(id_planificacion = id_planificacion,
                     detalles = detalles,
                     estado = estado,
                     fecha = fecha)