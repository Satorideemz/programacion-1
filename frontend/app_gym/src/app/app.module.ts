import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';

//Usuario no registrado
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NavegacionConHorarioComponent } from './components/navegacion-con-horario/navegacion-con-horario.component';
import { NavegacionhomeComponent } from './components/navegacionhome/navegacionhome.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClasePuntualComponent } from './pages/clase-puntual/clase-puntual.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';

//Profesores
import { HomeprofesorComponent } from './pages/profesor/homeprofesor/homeprofesor.component';
import { NavegacionProfesorComponent } from './components/navegacion-profesor/navegacion-profesor.component';
import { MiPerfilProfesorComponent } from './pages/profesor/mi-perfil-profesor/mi-perfil-profesor.component';
import { BuscarAlumnoProfesorComponent } from './pages/profesor/buscar-alumno-profesor/buscar-alumno-profesor.component';
import { NuevosAlumnosProfesorComponent } from './pages/profesor/nuevos-alumnos-profesor/nuevos-alumnos-profesor.component';
import { AlumnosProfesorComponent } from './pages/profesor/alumnos-profesor/alumnos-profesor.component';
import { RutinaABMProfesorComponent } from './pages/profesor/rutina-abm-profesor/rutina-abm-profesor.component';
import { NuevaRutinaProfesorComponent } from './pages/profesor/nueva-rutina-profesor/nueva-rutina-profesor.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ClasesProfesorComponent } from './pages/profesor/clases-profesor/clases-profesor.component';
import { ClasesAsistenciaProfesorComponent } from './pages/profesor/clases-asistencia-profesor/clases-asistencia-profesor.component';
import { PerfilAlumnoProfesorComponent } from './pages/profesor/perfil-alumno-profesor/perfil-alumno-profesor.component';
import { AbmProfesorComponent } from './pages/admi/abm-profesor/abm-profesor.component';
import { EditarRutinaProfesorComponent } from './pages/profesor/editar-rutina-profesor/editar-rutina-profesor.component';

//Componentes temporal despues borrar
import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';
import { VerAlumnoComponent } from './components/alumnos/ver-alumno/ver-alumno.component';
import { AbmComponent } from './components/rutina/abm/abm.component';
import { PagosComponent } from './components/admi/pagos/pagos.component';
import { AbmAlumnoComponent } from './components/alumnos/abm-alumno/abm-alumno.component';
import { AbmadminComponent } from './components/admi/profesores/abmadmin/abmadmin.component';

//Admi
import { NavegacionAdmiComponent } from './components/navegacion-admi/navegacion-admi.component';
import { MiPerfilAdmiComponent } from './pages/admi/mi-perfil-admi/mi-perfil-admi.component';
import { ClasesAdmiComponent } from './pages/admi/clases-admi/clases-admi.component';
import { ClasesAsistenciaAdmiComponent } from './pages/admi/clases-asistencia-admi/clases-asistencia-admi.component';
import { AlumnosAdmiComponent } from './pages/admi/alumnos-admi/alumnos-admi.component';
import { BuscarAlumnoAdmiComponent } from './pages/admi/buscar-alumno-admi/buscar-alumno-admi.component';
import { BuscarProfesorComponent } from './pages/admi/buscar-profesor/buscar-profesor.component';
import { NuevosAlumnosAdmiComponent } from './pages/admi/nuevos-alumnos-admi/nuevos-alumnos-admi.component';
import { HomeAdmiComponent } from './pages/admi/homeadmi/homeadmi.component';
import { PagosAdmiComponent } from './pages/admi/pagos-admi/pagos-admi.component';
import { PagosPuntualAdmiComponent } from './pages/admi/pagos-puntual-admi/pagos-puntual-admi.component';
import { RutinaAbmAdmiComponent } from './pages/admi/rutina-abm-admi/rutina-abm-admi.component';
import { EditarRutinaAdmiComponent } from './pages/admi/editar-rutina-admi/editar-rutina-admi.component';
import { NuevaRutinaAdmiComponent } from './pages/admi/nueva-rutina-admi/nueva-rutina-admi.component';
import { NuevosProfesoresComponent } from './pages/admi/nuevos-profesores/nuevos-profesores.component';
import { VerAlumnoAdmiComponent } from './components/alumnos/ver-alumno-admi/ver-alumno-admi.component';
import { AbmAdmiComponent } from './components/rutina/abm-admi/abm-admi.component';
import { PerfilAlumnoAdmiComponent } from './pages/admi/perfil-alumno-admi/perfil-alumno-admi.component';
import { AbmAlumnoAdmiComponent } from './components/alumnos/abm-alumno-admi/abm-alumno-admi.component';



@NgModule({
  declarations: [


    AppComponent,
    HomeComponent,

    //Usuario no registrado
    HistoriaComponent,
    ProfesoresComponent,
    NavegacionConHorarioComponent,
    NavegacionComponent,
    NavegacionhomeComponent,
    FooterComponent,
    ClasesComponent,
    ClasePuntualComponent,
    ContactanosComponent,
    IngresarComponent,

    //Profesores
    HomeprofesorComponent,
    NavegacionProfesorComponent,
     MiPerfilProfesorComponent,
     BuscarAlumnoProfesorComponent,
     BuscarProfesorComponent,
     NuevosAlumnosProfesorComponent,
     AlumnosProfesorComponent,
     RutinaABMProfesorComponent,
     NuevaRutinaProfesorComponent,
     HorariosComponent,
     ClasesProfesorComponent,
     ClasesAsistenciaProfesorComponent,
     PerfilAlumnoProfesorComponent,
     EditarRutinaProfesorComponent,
    
     //Componentes temporal despues borrar
     VerClaseComponent,
     VerAlumnoComponent,
     AbmComponent,
     PagosComponent,
     AbmAlumnoComponent,
     AbmadminComponent,
     

     //Admi
     NavegacionAdmiComponent,
     MiPerfilAdmiComponent,     
     ClasesAdmiComponent,
     ClasesAsistenciaAdmiComponent,
     AlumnosAdmiComponent,
     BuscarAlumnoAdmiComponent,
     NuevosAlumnosAdmiComponent,
     HomeAdmiComponent,
     PagosAdmiComponent,
     PagosPuntualAdmiComponent,
     AbmProfesorComponent,
     RutinaAbmAdmiComponent,
     EditarRutinaAdmiComponent,
     NuevaRutinaAdmiComponent,
     NuevosProfesoresComponent,
     VerAlumnoAdmiComponent,
     AbmAdmiComponent,
     PerfilAlumnoAdmiComponent,
     AbmAlumnoAdmiComponent,

     
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourModule { }