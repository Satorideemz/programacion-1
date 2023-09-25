import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
