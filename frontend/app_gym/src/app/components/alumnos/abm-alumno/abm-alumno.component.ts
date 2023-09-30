import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm-alumno',
  templateUrl: './abm-alumno.component.html',
  styleUrls: ['./abm-alumno.component.css']
})
export class AbmAlumnoComponent {


  constructor(private router: Router) { }


  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este alumno?');
    if (confirmed) {
      // User clicked OK, perform the delete action here
      // You can add your delete logic here
      console.log('Item deleted.'); // Replace with your actual delete code
      this.router.navigate(['/buscar-alumno-profesor']);
    } else {
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }

}