import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil-admi',
  templateUrl: './mi-perfil-admi.component.html',
  styleUrls: ['./mi-perfil-admi.component.css']
})
export class MiPerfilAdmiComponent {

  constructor(private router: Router) { }

  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este admi?');
    if (confirmed) {
      // User clicked OK, perform the delete action here
      // You can add your delete logic here
      console.log('Item deleted.'); // Replace with your actual delete code
      this.router.navigate(['/home']);
    } else {
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }
}
