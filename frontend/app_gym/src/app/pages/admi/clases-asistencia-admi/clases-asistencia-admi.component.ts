import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerClasesService } from 'src/app/services/clases/ver-clases.service';
import { BuscarAlumnoService } from 'src/app/services/alumnos/buscar-alumno.service';

@Component({
  selector: 'app-clases-asistencia-admi',
  templateUrl: './clases-asistencia-admi.component.html',
  styleUrls: ['./clases-asistencia-admi.component.css'],
  
})

export class ClasesAsistenciaAdmiComponent{
  arrayAsistencia: any;
  //variable que utiliza el servicio para traer los resultados del query de busqueda
  search_value: string = "";
  //variables para mostrar profesor o alumno segun sea el caso de lo seleccionado
  showVerAlumnos: boolean = false;
  //variable que comparte el componente padre e hijo para saber si tuvo cambios el campo de busqueda
  changingValue: string="";

  constructor(private router: Router,
    private route: ActivatedRoute,
    private asistencia: VerClasesService,
    private buscarAlumnoService: BuscarAlumnoService) { }
  

    //Al apretar el boton de buscar capturo el input ingresado y lo envio al servicio de buscar alumnos
    capture_search_value(search_value: string) {
      //muestro la tabla de alumnos encontrados
      this.showVerAlumnos = true
      console.log('Response from service:', search_value);
      this.buscarAlumnoService.retrieve_search_value(search_value);
      this.changingValue= search_value;
    }
    
  ngOnInit() {
    // Traigo las asistencias de las clases
      this.asistencia.getAsistencia().subscribe((data: any) => {
        console.log('JSON data', data);
        console.log('arrayAsistencia:', data.usuarios); // Ajusta el nombre de la propiedad aquí
        this.arrayAsistencia = data.usuarios;
      }); 
  }

  seleccionarclase(clase_id:any): void {
    this.asistencia.retrieve_clase_id(clase_id); //guardo el id de la clase para posteriormente saber que traer
    console.log(clase_id)
    this.router.navigate(['/clases-todas'] ); 
  
  }

  borrarIdClase(userId: number): void {
    console.log(userId);
    this.asistencia.borrarIdClase(userId).subscribe({
      next: () => {
        console.log(userId);
        this.router.navigateByUrl('/clases-asistencia-admi');
        //Navego a la ruta clases-asistencia luego de hacer la modificacion
      },
      error: (error) => {
        alert('Credenciales inválidas');
      },
      complete: () => {
        console.log('Operación de edición completa, id_clase null');
      }
    });
  }

}