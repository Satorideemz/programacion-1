#Cambiar el nombre en la importación para clarificar y evitar conflictos
from .usuario import Usuario as UsuarioResource
from .usuario import Usuarios as UsuariosResource
from .usuariosalumnos import UsuariosAlumnos as UsuariosAlumnosResource

from .usuariosalumnos import UsuarioAlumno as UsuarioAlumnoResource
from .usuariosprofesor import UsuariosProfesores as UsuariosProfesoresResource
from .planificacion import Planificacion as PlanificacionResource

from .pago import Pago as PagoResource
from .login import Login as LoginResource
