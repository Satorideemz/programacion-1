import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent {
  showVerProfesor: boolean = false;
  showVerAlumnos: boolean = false;
  
  buttonId: number = 0;
  
    constructor(
      private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.buttonId = params['id'];
      });
    }

    get mybuttonId(){
      return this.buttonId
    }
    

  }