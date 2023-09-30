import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
  arrayAlumnos = [
    {
      alumno_id: "1",
      nombre:"pepito",
      apellido:"rodriguez",
    },
    {
      alumno_id: "2",
      nombre:"pepito2",
      apellido:"rodriguez2",
    },
    {
      alumno_id: "3",
      nombre:"pepito3",
      apellido:"rodriguez3",
    }

  ];

  constructor(private router: Router) { }


  handleButtonClick(): void {
  // Navigate to the desired route when the button is clicked
  this.router.navigate(['/pagos-puntual-admi']); // Replace 'your-desired-route' with the actual route you want to navigate to
  }

  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este alumno?');
    if (confirmed) {
      // User clicked OK, perform the delete action here
      // You can add your delete logic here
      console.log('Item deleted.'); // Replace with your actual delete code
    } else {
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }


}