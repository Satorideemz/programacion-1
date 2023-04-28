from .. import db

class Usuario(db.Model):
    id_Usuario = db.Column(db.Integer,primary_key=True)
    id_Alumno = db.Column(db.Integer,primary_key=True)
    estado_de_la_cuenta = db.Column(db.String(15),nullable=False)

    
    
    def __repr__(self):
        return '<Usuario: %r >' % (self.nombre)
    
    #convierto objeto en json
    def to_json(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Alumno' : self.id_Alumno,
            'estado_de_la_cuenta' : str(self.estado_de_la_cuenta),
            
        }
        return usuario_json
    
    def to_json_short(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Alumno' : self.id_Alumno,
            'estado_de_la_cuenta' : str(self.estado_de_la_cuenta),

        }
        return usuario_json
    
    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id_Usuario = usuario_json.get('id_Usuario')
        id_Alumno = usuario_json.get('id_Alumno')
        estado_de_la_cuenta = usuario_json.get('estado_de_la_cuenta')
        
        
        
        
        return Usuario(id_Usuario = id_Usuario,
                       id_Alumno = id_Alumno,
                       estado_de_la_cuenta = estado_de_la_cuenta,
                        )