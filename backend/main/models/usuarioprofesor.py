from .. import db
from . import UsuarioModel
import json

class UsuarioProfesor(db.Model):
    id_Usuario = db.Column(db.Integer,db.ForeignKey("usuario.id_Usuario"), nullable=False)
    id_Profesor = db.Column(db.Integer,primary_key=True)
    id_Clase = db.Column(db.Integer,nullable=True)
    disponibilidad = db.Column(db.String(80),nullable=False)
    titulo = db.Column(db.String(80),nullable=False)
    usuarioprofesor = db.relationship("Usuario", back_populates="profesor", uselist=False, single_parent=True)

    #clasedelprofesor = db.relationship("ProfesorClases", back_populates="clasedelprofesor", uselist=False, single_parent=True)
    #profesorclase = db.relationship('Clase', secondary=ProfesorClases, backref=db.backref('Clase', lazy='dynamic'))
    
    def __repr__(self):
        return '<UsuarioProfesor: %r >' % (self.nombre)
    
    #convierto objeto en json
    def to_json(self):
        self.usuarioprofesor = db.session.query(UsuarioModel).get_or_404(self.id_Usuario)
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Profesor' : self.id_Profesor,
            'id_Clase' : self.id_Clase,
            'disponibilidad' : str(self.disponibilidad),
            'titulo' : str(self.titulo),
            'usuarioprofesor' : self.usuarioprofesor.to_json()

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
    

    def to_json_complete(self):
        profesorclase = [profeclase.to_json() for profeclase in self.profesorclase]
        usuarioprofesor_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Profesor' : self.id_Profesor,
            'id_Clase' : self.id_Clase,
            'disponibilidad' : str(self.disponibilidad),
            'titulo' : str(self.titulo), 
            'profesorclase' : profesorclase
        }
        return usuarioprofesor_json
    


    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id_Usuario = usuario_json.get('id_Usuario')
        id_Profesor = usuario_json.get('id_Profesor')
        id_Clase = usuario_json.get('id_Clase')
        disponibilidad = usuario_json.get('disponibilidad')
        titulo = usuario_json.get('titulo')
        
        
        
        return UsuarioProfesor(id_Usuario = id_Usuario,
                       id_Profesor = id_Profesor,
                       id_Clase = id_Clase,
                       disponibilidad = disponibilidad,
                       titulo = titulo,
                        )