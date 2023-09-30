import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abmadmin',
  templateUrl: './abmadmin.component.html',
  styleUrls: ['./abmadmin.component.css']
})
export class AbmadminComponent {

  arrayProfesores = [
    {
      profesor_id: "1",
      nombre:"sergio",
      apellido:"gonzales",
    },
    {
      profesor_id: "2",
      nombre:"sergio2",
      apellido:"gonzales2",
    },
    {
      profesor_id: "3",
      nombre:"sergio3",
      apellido:"gonzales3",
    },

  ];

  constructor(private router: Router) { }



 
  handleButtonClick(): void {
  // Navigate to the desired route when the button is clicked
  this.router.navigate(['/abm-profesor']); // Replace 'your-desired-route' with the actual route you want to navigate to
  }

  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este profesor?');
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