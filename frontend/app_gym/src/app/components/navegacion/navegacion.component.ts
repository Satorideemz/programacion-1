import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  
  verContactanos = true;
  verHome = true;
  verHorario = false;
  verIngresar = true;

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    // Me fijo si la ruta es login y oculto funcionalidad

    if(this.router.url === '/contactanos') {
      this.verContactanos = false;
    }

    if(this.router.url === '/home') {
      this.verHome = false;
    }

    if(this.router.url === '/clase-puntual') {
      this.verHorario = true;
    }

    if(this.router.url === '/ingresar') {
      this.verIngresar = false;
    }

  }
}


