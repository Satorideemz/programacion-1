import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarAlumnoService } from 'src/app/services/alumnos/buscar-alumno.service';
import { BuscarProfesorService } from 'src/app/services/profesores/buscar-profesor.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent {
  search_value: string = "";
  showVerProfesor: boolean = false;
  showVerAlumnos: boolean = false;
  
  buttonId: number = 0;
  
    constructor(
      private route: ActivatedRoute,
      private buscarProfesorService: BuscarProfesorService,
      private buscarAlumnoService: BuscarAlumnoService) 
      {   //el sieguiente metodo aplica a todo lo que esta en el constructur
      this.route.queryParams.subscribe(params => { 
        this.buttonId = params['id'];
      });
      }


    //Obtengo el id del boton para saber que debo mostrar, si alumnos o si profesor
    get mybuttonId(){
      return this.buttonId
    }

    //Al apretar el boton de buscar capturo el input ingresado y lo envio al servicio de buscar alumnos
    capture_search_value(search_value: string) {
      this.showVerAlumnos = true
      console.log('Response from service:', search_value);
      this.buscarAlumnoService.retrieve_search_value(search_value);
    }

     //Al apretar el boton de buscar capturo el input ingresado y lo envio al servicio de buscar profesor
    captura_search_value(search_value: string) {
      this.showVerProfesor = true
      console.log('Response from service:', search_value);
      this.buscarProfesorService.retrieve_search_value(search_value);
    }
  }