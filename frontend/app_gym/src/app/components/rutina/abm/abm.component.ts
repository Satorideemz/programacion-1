import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent {

  arrayRutinas = [
    {
      id_rutina: "1",
      nombre: "Pesas"   ,           
      detalles:"x15 Curl de biceps",
    },
    {
      id_rutina: "2",
      nombre: "Pesas"   ,           
      detalles:"x15 Curl de biceps",
    },
    {
      id_rutina: "3",
      nombre: "Pesas"   ,           
      detalles:"x15 Curl de biceps",
    }
  ];


  constructor(private router: Router) { }

  handleButtonClick(): void {
    // Navigate to the desired route when the button is clicked
    this.router.navigate(['/editar-rutina']); // Replace 'your-desired-route' with the actual route you want to navigate to
    }
  
  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar esta rutina?');
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
