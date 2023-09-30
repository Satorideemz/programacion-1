import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routeo de usuario no registrado
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClasePuntualComponent } from './pages/clase-puntual/clase-puntual.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';


//routeo  de profesores
import { HomeprofesorComponent } from './pages/profesor/homeprofesor/homeprofesor.component';
import { MiPerfilProfesorComponent } from './pages/profesor/mi-perfil-profesor/mi-perfil-profesor.component';
import { BuscarAlumnoProfesorComponent } from './pages/profesor/buscar-alumno-profesor/buscar-alumno-profesor.component';
import { NuevosAlumnosProfesorComponent } from './pages/profesor/nuevos-alumnos-profesor/nuevos-alumnos-profesor.component';
import { RutinaABMProfesorComponent } from './pages/profesor/rutina-abm-profesor/rutina-abm-profesor.component';
import { AlumnosProfesorComponent } from './pages/profesor/alumnos-profesor/alumnos-profesor.component'; 
import { NuevaRutinaProfesorComponent } from './pages/profesor/nueva-rutina-profesor/nueva-rutina-profesor.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ClasesProfesorComponent } from './pages/profesor/clases-profesor/clases-profesor.component';
import { ClasesAsistenciaProfesorComponent } from './pages/profesor/clases-asistencia-profesor/clases-asistencia-profesor.component';
import { PerfilAlumnoProfesorComponent } from './pages/profesor/perfil-alumno-profesor/perfil-alumno-profesor.component';
import { AbmProfesorComponent } from './pages/admi/abm-profesor/abm-profesor.component';
import { EditarRutinaProfesorComponent } from './pages/profesor/editar-rutina-profesor/editar-rutina-profesor.component';


//ruta temporal despues borrar
import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';
import { VerAlumnoComponent } from './components/alumnos/ver-alumno/ver-alumno.component';
import { AbmComponent } from './components/rutina/abm/abm.component';
import { AbmadminComponent } from './components/admi/profesores/abmadmin/abmadmin.component';
import { PagosComponent } from './components/admi/pagos/pagos.component';

//routeo  de admi
import { MiPerfilAdmiComponent } from './pages/admi/mi-perfil-admi/mi-perfil-admi.component';
import { ClasesAdmiComponent } from './pages/admi/clases-admi/clases-admi.component';
import { ClasesAsistenciaAdmiComponent } from './pages/admi/clases-asistencia-admi/clases-asistencia-admi.component';
import { AlumnosAdmiComponent } from './pages/admi/alumnos-admi/alumnos-admi.component'; 
import { BuscarAlumnoAdmiComponent } from './pages/admi/buscar-alumno-admi/buscar-alumno-admi.component';
import { NuevosAlumnosAdmiComponent } from './pages/admi/nuevos-alumnos-admi/nuevos-alumnos-admi.component';
import { HomeAdmiComponent } from './pages/admi/homeadmi/homeadmi.component';
import { PagosAdmiComponent } from './pages/admi/pagos-admi/pagos-admi.component';
import { PagosPuntualAdmiComponent } from './pages/admi/pagos-puntual-admi/pagos-puntual-admi.component';
import { RutinaAbmAdmiComponent } from './pages/admi/rutina-abm-admi/rutina-abm-admi.component';
import { NuevaRutinaAdmiComponent } from './pages/admi/nueva-rutina-admi/nueva-rutina-admi.component';
import { BuscarProfesorComponent } from './pages/admi/buscar-profesor/buscar-profesor.component';
import { NuevosProfesoresComponent } from './pages/admi/nuevos-profesores/nuevos-profesores.component';
import { EditarRutinaAdmiComponent } from './pages/admi/editar-rutina-admi/editar-rutina-admi.component';
import { PerfilAlumnoAdmiComponent } from './pages/admi/perfil-alumno-admi/perfil-alumno-admi.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'historia', component: HistoriaComponent },
  {path: 'profesores', component: ProfesoresComponent },
  {path: 'clases', component: ClasesComponent},
  {path: 'clase-puntual', component: ClasePuntualComponent},
  {path: 'contactanos', component: ContactanosComponent },
  {path: 'ingresar', component: IngresarComponent },
  {path: 'horarios', component: HorariosComponent },
  {path: '', redirectTo: '/home' , pathMatch: 'full' }, //redirecciona al home por defecto 


  //routeo  de profesores
  {path: 'homeprofesor', component: HomeprofesorComponent },
  {path: 'mi-perfil-profesor', component: MiPerfilProfesorComponent },
  {path: 'buscar-alumno-profesor', component: BuscarAlumnoProfesorComponent },
  {path: 'nuevos-alumnos-profesor', component: NuevosAlumnosProfesorComponent },
  {path: 'alumnos-profesor', component: AlumnosProfesorComponent },
  {path: 'rutina-abm-profesor', component: RutinaABMProfesorComponent },
  {path: 'nueva-rutina-profesor', component: NuevaRutinaProfesorComponent },
  {path: 'clases-profesor', component: ClasesProfesorComponent },
  {path: 'clases-asistencia-profesor', component: ClasesAsistenciaProfesorComponent },
  {path: 'perfil-alumno-profesor', component: PerfilAlumnoProfesorComponent },
  {path: 'abm-profesor' , component: AbmProfesorComponent },
  {path: 'editar-rutina-profesor', component: EditarRutinaProfesorComponent },

   //path temporal
  {path: 'ver-clases', component: VerClaseComponent },
  {path: 'ver-alumno', component: VerAlumnoComponent },
  {path: 'ver-rutinas', component: AbmComponent },
  {path: 'ver-profesores', component: AbmadminComponent},
  {path: 'pagos', component: PagosComponent},


  //routeo  de admi
  {path: 'mi-perfil-admi', component: MiPerfilAdmiComponent },
  {path: 'clases-admi', component: ClasesAdmiComponent },
  {path: 'clases-asistencia-admi', component: ClasesAsistenciaAdmiComponent },
  {path: 'alumnos-admi', component: AlumnosAdmiComponent },
  {path: 'buscar-alumno-admi', component: BuscarAlumnoAdmiComponent },
  {path: 'nuevos-alumnos-admi', component: NuevosAlumnosAdmiComponent },
  {path: 'buscar-profesor', component: BuscarProfesorComponent},
  {path: 'homeadmi', component: HomeAdmiComponent },
  {path: 'homeadmi', component: HomeAdmiComponent },
  {path: 'pagos-admi', component: PagosAdmiComponent },
  {path: 'pagos-puntual-admi', component: PagosPuntualAdmiComponent },
  {path: 'rutina-abm-admi', component: RutinaAbmAdmiComponent},
  {path: 'nueva-rutina-admi', component: NuevaRutinaAdmiComponent },
  {path: 'nuevos-profesores', component: NuevosProfesoresComponent },
  {path: 'editar-rutina-admi', component:  EditarRutinaAdmiComponent},
  {path: 'perfil-alumno-admi', component:  PerfilAlumnoAdmiComponent},




  {path: '**', redirectTo: 'home'}
  /*crear una pagina de error 404 por defecto en linea de arriba */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
