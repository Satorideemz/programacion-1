from .. import db
from . import UsuarioModel

class UsuariosAlumnos(db.Model):
    id_Alumno = db.Column(db.Integer,primary_key=True)
    id_Usuario = db.Column(db.Integer,db.ForeignKey("usuario.id_Usuario"), nullable=False)
    id_Clase = db.Column(db.Integer,nullable=True)    
    estado_de_la_cuenta = db.Column(db.String(15),nullable=False)
    usuarios= db.relationship("Usuario", back_populates="alumno", uselist=False, single_parent=True )
    
    
    def __repr__(self):
        return '<UsuariosAlumnos: %r >' % (self.id_Alumno)
    
    def get_id_clase(self):
        return self.id_Clase

    #convierto objeto en json
    def to_json(self):
        self.usuariosalumnos = db.session.query(UsuarioModel).get_or_404(self.id_Usuario)
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Alumno' : self.id_Alumno,
            'estado_de_la_cuenta' : str(self.estado_de_la_cuenta),
            'alumno_detalle' : self.usuariosalumnos.to_json()
        }
        return usuario_json
    
    def to_json_short(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Alumno' : self.id_Alumno,
            'estado_de_la_cuenta' : str(self.estado_de_la_cuenta),

        }
        return usuario_json
    
    def to_json_complete(self):
        self.usuariosalumnos = db.session.query(UsuarioModel).get_or_404(self.id_Usuario)
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'id_Alumno' : self.id_Alumno,
            'estado_de_la_cuenta' : str(self.estado_de_la_cuenta),
            'alumno_detalle' : self.usuariosalumnos.to_json()
        }
        return usuario_json
    
    
    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id_Usuario = usuario_json.get('id_Usuario')
        id_Alumno = usuario_json.get('id_Alumno')
        estado_de_la_cuenta = usuario_json.get('estado_de_la_cuenta')
 
        return UsuariosAlumnos(id_Usuario = id_Usuario,
                       id_Alumno = id_Alumno,
                       estado_de_la_cuenta = estado_de_la_cuenta,
                        )