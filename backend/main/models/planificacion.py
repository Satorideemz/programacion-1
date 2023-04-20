from .. import db

class Planificacion(db.model):
    
    id_planificacion = db.Column(db.Integer, primary_key=True)
    detalles = db.Column(db.String(300), nullable=False)
    estado = db.Column(db.String(15), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    
    
    def __repr__(self):
        return '<Planificacion: %r >' % (self.detalles)
    
    def to_json(self):
        planificacion_json = {
            'id_planificacion' : self.id_planificacion,
            'detalles' : str(self.detalles),
            'estado' : str(self.estado),
            'fecha' : self.fecha,
        }
        return planificacion_json
    
    def to_json_short(self):
        planificacion_json = {
            'id_planificacion' : self.id_planificacion,
            'detalles' : str(self.detalles),
            'estado' : str(self.estado),
            'fecha' : self.fecha,
        }
        return planificacion_json
    
    @staticmethod
    
    def from_json(planificacion_json):
        
        id_planificacion = planificacion_json.get('id_planificacion')
        detalles = planificacion_json.get('detalles')
        estado = planificacion_json.get('estado')
        fecha = planificacion_json.get('fecha')
        
        
        return Planificacion(id_planificacion = id_planificacion,
                     detalles = detalles,
                     estado = estado,
                     fecha = fecha)