#Cambiar el nombre en la importación para clarificar y evitar conflictos
from .usuario import Usuario as UsuarioResource
from .usuario import Usuarios as UsuariosResource

from .usuariosalumnos import UsuarioAlumno as UsuarioAlumnoResource
from .usuariosalumnos import UsuariosAlumnos as UsuariosAlumnosResource

from .usuarioprofesor import Profesor as UsuarioProfesorResource

from .planificacion import Planificacion as PlanificacionResource
from .planificacion import Planificaciones as PlanificacionesResource

from .planificacionalumno import PlanificacionA as PlanificacionalumnoResource

from .profesorclases import Profesorclases as ClasesResource

from .pago import Pago as PagoResource
from .login import Login as LoginResource
