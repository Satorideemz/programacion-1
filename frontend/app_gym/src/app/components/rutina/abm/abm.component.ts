import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AbmRutinaService } from 'src/app/services/rutina/abm-rutina.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent {

  hashRutinas: any;

  constructor(private router: Router,
    private abm_rutina: AbmRutinaService ) { }

  ngOnInit() {
    // Traigo las rutinas
    this.abm_rutina.getRutina().subscribe((data:any) =>{
      console.log('JSON data', data);
      console.log(data.planificaciones[0])
      this.hashRutinas = data.planificaciones[0];
    })
  }


  handleButtonClick(): void {
    // Navigate to the desired route when the button is clicked
    this.router.navigate(['/editar-rutina']); // Replace 'your-desired-route' with the actual route you want to navigate to
    }
  
  confirmDelete(rutinaId: number): void {
    const confirmed = window.confirm('Estás seguro de que deseas borrar esta rutina?');
    if (confirmed) {
      // Si confirma el borrado, invoco al servicio de borrar rutina
      this.abm_rutina.deleteRutina(rutinaId).subscribe({
        next: () => {
          console.log('Rutina eliminada con éxito.');
          this.router.navigate(['/alumnos']); // Redirecciono a buscar rutina
        },
        error: (error) => {
          console.error('Error al eliminar el rutina:', error);
          alert('Error al eliminar el rutina. Por favor, intenta de nuevo más tarde.');
        },
        complete: () => {
          console.info('Operación de eliminación completa.');
        }
      });
    } else {
      // Se cancela la confirmacion de borrar rutina y regresa al formulario
    }
  }
}
