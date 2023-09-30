import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abmadmi',
  templateUrl: './abmadmi.component.html',
  styleUrls: ['./abmadmi.component.css']
})
export class AbmadmiComponent {

  arrayProfesores = [
    {
      profesor_id: "1",
      nombre:"Rosalia",
      apellido:"Gonzales",
    },
    {
      profesor_id: "2",
      nombre:"Julio",
      apellido:"Gonzales",
    },
    {
      profesor_id: "3",
      nombre:"Quinto",
      apellido:"Gonzales",
    },

  ];

  constructor(private router: Router) { }

  handleButtonClick(): void {
    // Navigate to the desired route when the button is clicked
    this.router.navigate(['/abm-profesor']); // Replace 'your-desired-route' with the actual route you want to navigate to
    }
  
    confirmDelete(): void {
      const confirmed = window.confirm('Estas seguro de que deseas borrar este alumno?');
      if (confirmed) {
        // User clicked OK, perform the delete action here
        // You can add your delete logic here
        console.log('Item deleted.'); // Replace with your actual delete code
        this.router.navigate(['/buscar-profesor']);
      } else {
        // User clicked Cancel or closed the dialog
        // No action needed
      }
    }
    
    }
