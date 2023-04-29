from .. import db

class UsuarioProfesor(db.Model):
    id_Usuario = db.Column(db.Integer,primary_key=True)
    id_Profesor = db.Column(db.Integer,primary_key=True)
    id_Clase = db.Column(db.Integer,primary_key=True)
    disponibilidad = db.Column(db.String(80),nullable=False)
    titulo = db.Column(db.String(80),nullable=False)

    
    
    def __repr__(self):
        return '<Usuario: %r >' % (self.nombre)
    
    #convierto objeto en json
    def to_json(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Profesor' : self.id_Profesor,
            'id_Clase' : self.id_Clase,
            'disponibilidad' : str(self.disponibilidad),
            'titulo' : str(self.titulo),
        }
        return usuario_json
    
    def to_json_short(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Profesor' : self.id_Profesor,
            'id_Clase' : self.id_Clase,
            'disponibilidad' : str(self.disponibilidad),
            'titulo' : str(self.titulo),  

        }
        return usuario_json
    
    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id_Usuario = usuario_json.get('id_Usuario')
        id_Profesor = usuario_json.get('id_Profesor')
        id_Clase = usuario_json.get('id_Clase')
        disponibilidad = usuario_json.get('disponibilidad')
        titulo = usuario_json.get('titulo')
        
        
        
        return Usuario(id_Usuario = id_Usuario,
                       id_Profesor = id_Profesor,
                       id_Clase = id_Clase,
                       disponibilidad = disponibilidad,
                       titulo = titulo,
                        )