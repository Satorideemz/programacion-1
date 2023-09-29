import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NavegacionhomeComponent } from './components/navegacionhome/navegacionhome.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClasePuntualComponent } from './pages/clase-puntual/clase-puntual.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';

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

import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';

import { NavegacionAdmiComponent } from './components/navegacion-admi/navegacion-admi.component';
import { MiPerfilAdmiComponent } from './pages/admi/mi-perfil-admi/mi-perfil-admi.component';
import { ClasesAdmiComponent } from './pages/admi/clases-admi/clases-admi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    ProfesoresComponent,
    NavegacionComponent,
    NavegacionhomeComponent,
    FooterComponent,
    ClasesComponent,
    ClasePuntualComponent,
    ContactanosComponent,
    IngresarComponent,

    HomeprofesorComponent,
    NavegacionProfesorComponent,
     MiPerfilProfesorComponent,
     BuscarAlumnoProfesorComponent,
     NuevosAlumnosProfesorComponent,
     AlumnosProfesorComponent,
     RutinaABMProfesorComponent,
     NuevaRutinaProfesorComponent,
     HorariosComponent,
     ClasesProfesorComponent,
     ClasesAsistenciaProfesorComponent,

     VerClaseComponent,

     NavegacionAdmiComponent,
     MiPerfilAdmiComponent,
     ClasesAdmiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
