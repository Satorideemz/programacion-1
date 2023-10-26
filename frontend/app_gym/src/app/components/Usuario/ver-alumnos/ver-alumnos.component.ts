import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarAlumnoService } from 'src/app/services/alumnos/buscar-alumno.service';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';

@Component({
  selector: 'app-ver-alumnos',
  templateUrl: './ver-alumnos.component.html',
  styleUrls: ['./ver-alumnos.component.css']
})
export class VerAlumnosComponent {
  
  arrayUsuario:any;
  // arrayUsuario = [
  //   {
  //     usuario_id: "1",
  //     nombre:"pepito alumno",
  //     apellido:"rodriguez",
  //   },
  //   {
  //     usuario_id: "2",
  //     nombre:"pepito2 alumno",
  //     apellido:"rodriguez2",
  //   },
  //   {
  //     usuario_id: "3",
  //     nombre:"pepito3 alumno",
  //     apellido:"rodriguez3",
  //   }
  // ];
  constructor(private router: Router,
    private buscaralumnoservice : BuscarAlumnoService,
    private abmalumnoservice : AbmAlumnosService ) { }
  
  ngOnInit() {
    this.buscaralumnoservice.getUsers().subscribe((data:any) =>{
      console.log('JSON data', data);
      this.arrayUsuario = data.alumnos
    })
  }

  handleButtonClick(alumnoid:any): void {
    // Navigate to the desired route when the button is clicked
    this.abmalumnoservice.retrieve_alumno_id(alumnoid);
    console.log(alumnoid)
    this.router.navigate(['/alumnos']); // Replace 'your-desired-route' with the actual route you want to navigate to

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