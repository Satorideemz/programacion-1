import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Router } from '@angular/router';
import { BuscarProfesorService } from 'src/app/services/profesores/buscar-profesor.service';
import { AbmProfesoresService } from "src/app/services/profesores/abm-profesores.service";



@Component({
  selector: 'app-ver-profesores',
  templateUrl: './ver-profesores.component.html',
  styleUrls: ['./ver-profesores.component.css']
})
export class VerProfesoresComponent implements OnChanges  {
  @Input() someInput!: string ;
  arrayUsuario:any;
  
  constructor(private router: Router,

  //lupita de buscqueda
  private buscarprofesorservice : BuscarProfesorService,
  private abmprofesorservice : AbmProfesoresService  ) { }
  
  ngOnInit() {
    this.buscarprofesorservice.getUsers().subscribe((data:any) =>{
      console.log('JSON data', data);
      this.arrayUsuario = data.profesores
    })
  }

  handleButtonClick(profesorid:any): void {

    this.abmprofesorservice.retrieve_profesor_id(profesorid); //guardo el id del alumno para posteriormente saber a que alumno debo traer en las querys
    console.log(profesorid)
    const buttonId = 2; // Id para buscar alumnos
    this.router.navigate(['/usuario-abm'] , { queryParams: { id: buttonId } });  //  te lleva a visualizar el abm de profesores
  
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

  ngOnChanges(changes: SimpleChanges): void {
    //Si la variable de busqueda tuvo cambios, se refrescara con nuevos resultados
    console.log(this.someInput);
    this.buscarprofesorservice.getUsers().subscribe((data:any) =>{
      console.log('JSON data', data);
      this.arrayUsuario = data.profesores
    })
  }

  

  }