import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarProfesorService } from 'src/app/services/profesores/buscar-profesor.service';

@Component({
  selector: 'app-ver-profesores',
  templateUrl: './ver-profesores.component.html',
  styleUrls: ['./ver-profesores.component.css']
})
export class VerProfesoresComponent {

  arrayUsuario:any;
  
  constructor(private router: Router,

  //lupita de buscqueda
  private buscarprofesorservice : BuscarProfesorService ) { }
  ngOnInit() {
    this.buscarprofesorservice.getUsers().subscribe((data:any) =>{
      console.log('JSON data', data);
      this.arrayUsuario = data.profesores
    })
  }

  handleButtonClick(): void {
  // Navigate to the desired route when the button is clicked
  this.router.navigate(['/abm-usuario']); // Replace 'your-desired-route' with the actual route you want to navigate to
  }
  confirmDelete(): void {
    const confirmed = window.confirm('Estas seguro de que deseas borrar este usuario');
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