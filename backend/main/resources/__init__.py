#Cambiar el nombre en la importación para clarificar y evitar conflictos
from .usuario import Usuario as UsuarioResource
from .usuario import Usuarios as UsuariosResource

from .usuariosalumnos import UsuarioAlumno as UsuarioAlumnoResource
from .usuariosalumnos import UsuariosAlumnos as UsuariosAlumnosResource

from .usuarioprofesor import UsuarioProfesor as UsuarioProfesorResource
from .usuarioprofesor import UsuariosProfesores as UsuariosProfesoresResource


from .planificacion import Planificacion as PlanificacionResource
from .planificacion import Planificaciones as PlanificacionesResource

#from .planificacionalumno import PlanificacionAlumno as PlanificacionAlumnoResource

from .clases import ProfesorClases as ProfesorClasesResource

from .pago import Pago as PagoResource
from .login import Login as LoginResource
