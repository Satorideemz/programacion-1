from .. import db

class Usuario(db.Model):
    id_Usuario = db.Column(db.Integer,primary_key=True)
    rol = db.Column(db.String(15),nullable=False)
    nombre = db.Column(db.String(15),nullable=False)
    apellido = db.Column(db.String(15),nullable=False)
    mail = db.Column(db.String(30),nullable=False)
    dni = db.Column(db.Integer,nullable=False)
    telefono = db.Column(db.Integer,nullable=False)
    password = db.Column(db.String(30),nullable=False)
    edad = db.Column(db.Integer,nullable=False)
    sexo = db.Column(db.String(15),nullable=True)
    
    
    def __repr__(self):
        return '<Usuario: %r >' % (self.nombre)
    
    #convierto objeto en json
    def to_json(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'rol' : str(self.rol),
            'nombre' : str(self.nombre),
            'apellido' : str(self.apellido),
            'mail' : str(self.mail),
            'dni' : self.dni,
            'telefono' : self.telefono,
            'password' : str(self.password),
            'edad' : self.edad,
            'sexo' : str(self.sexo),
        }
        return usuario_json
    
    def to_json_short(self):
        usuario_json = {
            'id_Usuario' : self.id_Usuario,
            'rol' : str(self.rol),
            'nombre' : str(self.nombre),
            'apellido' : str(self.apellido),
            'mail' : str(self.mail),
            'dni' : self.dni,
            'telefono' : self.telefono,
            'password' : str(self.password),
            'edad' : self.edad,
            'sexo' : str(self.sexo),

        }
        return usuario_json
    
    @staticmethod
    #convertir json a objeto
    def from_json(usuario_json):
        id_Usuario = usuario_json.get('id_Usuario')
        rol = usuario_json.get('rol')
        nombre = usuario_json.get('nombre')
        apellido = usuario_json.get('apellido')
        mail = usuario_json.get('mail')
        dni = usuario_json.get('dni')
        telefono = usuario_json.get('telefono')
        password = usuario_json.get('password')
        edad = usuario_json.get('edad')
        sexo = usuario_json.get('sexo')
        
        
        
        return Usuario(id_Usuario = id_Usuario,
                       rol = rol,
                       nombre = nombre,
                       apellido = apellido,
                       mail = mail,
                       dni = dni,
                       telefono = telefono,
                       password = password,
                       edad =  edad,
                       sexo = sexo
                        )
    
