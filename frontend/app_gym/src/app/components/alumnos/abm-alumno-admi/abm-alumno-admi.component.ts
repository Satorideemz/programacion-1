import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm-alumno-admi',
  templateUrl: './abm-alumno-admi.component.html',
  styleUrls: ['./abm-alumno-admi.component.css']
})
export class AbmAlumnoAdmiComponent {

  constructor(private router: Router) { }


  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este alumno?');
    if (confirmed) {
      // User clicked OK, perform the delete action here
      // You can add your delete logic here
      console.log('Item deleted.'); // Replace with your actual delete code
      this.router.navigate(['/buscar-alumno-admi']);
    } else {
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }

}