from .. import db

class Usuario(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(15),nullable=False)
    def __repr__(self):
        return '<Usuario: %r >' % (self.nombre)
    #convierto objeto en json
    def to_json(self):
        usuario_json = {
            'id' : self.id,
            'nombre' : str(self.nombre),

        }
        return usuario_json
    
    def to_json_short(self):
        usuario_json = {
            'id' : self.id,
            'nombre' : str(self.nombre),

        }
        return usuario_json
    
    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id = usuario_json.get('id')
        nombre = usuario_json.get('nombre')
        return Usuario(id = id,
                       nombre = nombre,
                        )
    
