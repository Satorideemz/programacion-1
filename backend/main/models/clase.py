from .. import db


class Clase(db.model):
    
    id_Clase = db.Column(db.Integer, primary_key=True)
    detalles = db.Column(db.String(300), nullable=False)
    dia = db.Column(db.String(15), nullable=False)
    horaFin = db.Column(db.Time, nullable=False)
    horaInicio = db.Column(db.Time, nullable=False)
    
    
    def __repr__(self):
        return '<Clase: %r >' % (self.detalles)
    
    
    def to_json(self):
        clase_json = {
            'id_Clase' : self.id_Clase,
            'detalles' : str(self.detalles),
            'dia' : str(self.dia),
            'horaFin' : self.horaFin,
            'horaInicio' : self.horaInicio,
        }
        return clase_json
    
    def to_json_short(self):
        clase_json = {
            'id_Clase' : self.id_Clase,
            'detalles' : str(self.detalles),
            'dia' : str(self.dia),
            'horaFin' : self.horaFin,
            'horaInicio' : self.horaInicio,
        }
        return clase_json
    
    @staticmethod
    
    def from_json(clase_json):
        
        id_Clase = clase_json.get('id_Clase')
        detalles = clase_json.get('detalles')
        dia = clase_json.get('dia')
        horaFin = clase_json.get('horaFin')
        horaInicio = clase_json.get('horaInicio')
        
        
        return Clase(id_Clase = id_Clase,
                     detalles = detalles,
                     dia = dia,
                     horaFin = horaFin,
                     horaInicio = horaInicio)
        
        

        
    


