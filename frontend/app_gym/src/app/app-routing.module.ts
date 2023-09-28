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


//ruta temporal despues borrar
import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';

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

   //path temporal
   {path: 'ver-clases', component: VerClaseComponent },




  {path: '**', redirectTo: 'home'}
  /*crear una pagina de error 404 por defecto en linea de arriba */


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
