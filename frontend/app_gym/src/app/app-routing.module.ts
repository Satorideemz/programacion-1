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
import { HorariosComponent } from './pages/horarios/horarios.component';


//ruta temporal despues borrar
import { VerClaseComponent } from './components/clases/ver-clase/ver-clase.component';
import { AbmComponent } from './components/rutina/abm/abm.component';
import { AbmUsuarioComponent } from './components/Usuario/abm-usuario/abm-usuario.component';
import { VerUsuarioComponent } from './components/Usuario/ver-usuario/ver-usuario.component';
import { PagosComponent } from './components/admi/pagos/pagos.component';

//routeo  de admi
import { ClasesTodasComponent } from './pages/admi/clases-todas/clases-todas.component';
import { ClasesAsistenciaAdmiComponent } from './pages/admi/clases-asistencia-admi/clases-asistencia-admi.component';
import { AlumnosComponent } from './pages/admi/alumnos/alumnos.component'; 
import { PagosAdmiComponent } from './pages/admi/pagos-admi/pagos-admi.component';
import { PagosPuntualAdmiComponent } from './pages/admi/pagos-puntual-admi/pagos-puntual-admi.component';
import { RutinaAbmAdmiComponent } from './pages/admi/rutina-abm-admi/rutina-abm-admi.component';
import { NuevaRutinaAdmiComponent } from './pages/admi/nueva-rutina-admi/nueva-rutina-admi.component';
import { EditarRutinaAdmiComponent } from './pages/admi/editar-rutina-admi/editar-rutina-admi.component';
import { BuscarUsuarioComponent } from './pages/admi/buscar-usuario/buscar-usuario.component';
import { NuevoUsuarioComponent } from './pages/admi/nuevo-usuario/nuevo-usuario.component';

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

  //path temporal
  {path: 'ver-clases', component: VerClaseComponent },
  {path: 'ver-usuario', component: VerUsuarioComponent },
  {path: 'abm-usuario', component: AbmUsuarioComponent },
  {path: 'ver-rutinas', component: AbmComponent },
  {path: 'pagos', component: PagosComponent},


  //routeo  de admi
  {path: 'clases-todas', component: ClasesTodasComponent },
  {path: 'clases-asistencia-admi', component: ClasesAsistenciaAdmiComponent },
  {path: 'alumnos', component: AlumnosComponent },
  {path: 'pagos-admi', component: PagosAdmiComponent },
  {path: 'pagos-puntual-admi', component: PagosPuntualAdmiComponent },
  {path: 'rutina-abm-admi', component: RutinaAbmAdmiComponent},
  {path: 'nueva-rutina-admi', component: NuevaRutinaAdmiComponent },
  {path: 'editar-rutina-admi', component:  EditarRutinaAdmiComponent},
  {path: 'buscar-usuario', component: BuscarUsuarioComponent},
  {path: 'nuevo-usuario', component: NuevoUsuarioComponent},

  {path: '**', redirectTo: 'home'}
  /*crear una pagina de error 404 por defecto en linea de arriba */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
