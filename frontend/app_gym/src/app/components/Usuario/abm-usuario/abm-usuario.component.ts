import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent {

  constructor(private router: Router) { }

  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este usuario?');
    if (confirmed) {
      // User clicked OK, perform the delete action here
      // You can add your delete logic here
      console.log('Item deleted.'); // Replace with your actual delete code
      this.router.navigate(['/buscar-usuario']);
    } else {
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }
}