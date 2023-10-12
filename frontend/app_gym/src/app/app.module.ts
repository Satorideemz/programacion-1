import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



//Usuario no registrado
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ClasePuntualComponent } from './pages/clase-puntual/clase-puntual.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';

//Componentes temporal despues borrar
import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';

import { AbmComponent } from './components/rutina/abm/abm.component';
import { PagosComponent } from './components/admi/pagos/pagos.component';
import { AbmUsuarioComponent } from './components/Usuario/abm-usuario/abm-usuario.component';

//Admi
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ClasesTodasComponent } from './pages/admi/clases-todas/clases-todas.component';
import { ClasesAsistenciaAdmiComponent } from './pages/admi/clases-asistencia-admi/clases-asistencia-admi.component';
import { AlumnosComponent } from './pages/admi/alumnos/alumnos.component';
import { PagosAdmiComponent } from './pages/admi/pagos-admi/pagos-admi.component';
import { PagosPuntualAdmiComponent } from './pages/admi/pagos-puntual-admi/pagos-puntual-admi.component';
import { RutinaAbmComponent } from './pages/admi/rutina-abm/rutina-abm.component';
import { EditarRutinaComponent } from './pages/admi/editar-rutina/editar-rutina.component';
import { NuevaRutinaComponent } from './pages/admi/nueva-rutina/nueva-rutina.component';
import { BuscarUsuarioComponent } from './pages/admi/buscar-usuario/buscar-usuario.component';
import { NuevoUsuarioComponent } from './pages/admi/nuevo-usuario/nuevo-usuario.component';
import {LoggedinComponent } from './components/loggedin/loggedin.component'
import {MainmenuComponent} from './components/mainmenu/mainmenu.component';
import { VerAlumnosComponent } from './components/Usuario/ver-alumnos/ver-alumnos.component';
import { VerProfesoresComponent } from './components/Usuario/ver-profesores/ver-profesores.component';
import { UsuarioAbmComponent } from './pages/admi/usuario-abm/usuario-abm.component';



export function tokenGetter() {
  return localStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    //Usuario no registrado
    HistoriaComponent,
    ProfesoresComponent,
    NavegacionComponent,
    FooterComponent,
    ClasesComponent,
    ClasePuntualComponent,
    ContactanosComponent,
    IngresarComponent,

    //Componentes temporal despues borrar
     VerClaseComponent,
     AbmComponent,
     PagosComponent,
     AbmUsuarioComponent,

     //Admi
     HorariosComponent,
     ClasesTodasComponent,
     ClasesAsistenciaAdmiComponent,
     AlumnosComponent,
     PagosAdmiComponent,
     PagosPuntualAdmiComponent,
     RutinaAbmComponent,
     EditarRutinaComponent,
     NuevaRutinaComponent,
     BuscarUsuarioComponent,
     NuevoUsuarioComponent,
     LoggedinComponent,
     MainmenuComponent,
     VerAlumnosComponent,
     VerProfesoresComponent,
     UsuarioAbmComponent,


  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourModule { }

