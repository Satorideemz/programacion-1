import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Router } from '@angular/router';
import { BuscarAlumnoService } from 'src/app/services/alumnos/buscar-alumno.service';
import { VerClasesService } from 'src/app/services/clases/ver-clases.service';
import { AbmAlumnosService } from "src/app/services/alumnos/abm-alumnos.service";



@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.component.html',
  styleUrls: ['./ver-asistencia.component.css']
})
export class VerAsistenciaComponent implements OnChanges {
  //Este input lo uso como variable para saber si debo refrescar el resultado de busqueda
  @Input() someInput!: string ;

  arrayAsistencia: any;
  arrayUsuario:any;
  currentPage: number = 1; // Pagina actual
  totalPages: number  = 0; // Total de paginas
  totalItems: number  = 0; //Total de elementos encontrados
  itemsPerPage: number  = 2; //Numero de items por pagina
  
  
  //Inicio los servicios que voy a usar para traer la informacion del backend
  constructor(private router: Router,
    private buscaralumnoservice : BuscarAlumnoService ,
    private abmalumnoservice: AbmAlumnosService,
    private asistencia: VerClasesService ) { }

    ngOnInit() {
      // Traigo los alumnos resultantes de la barra de busqueda
      this.searchquery()
    }
    

    ngOnChanges(changes: SimpleChanges): void {
      //Si la variable de busqueda tuvo cambios, se refrescara con nuevos resultados
      console.log(this.someInput);
      //Cuando rebusco algo por defecto me llevara a la primeram pagina siempre
      this.buscaralumnoservice.retrieve_requested_page(1,4)
      this.searchquery()

    }

    searchquery(){
      // Traigo los alumnos resultantes de la barra de busqueda
      this.buscaralumnoservice.getUsers().subscribe((data:any) =>{
        console.log('JSON data', data);
        this.arrayUsuario = data.alumnos
        this.currentPage = data.page
        this.totalPages = data.pages
        this.itemsPerPage = data.total
        console.log('JSON data', data.total);
      })      
    }

    //Hago una lista para las paginas, exceptuando la pagina actual
    getPageNumbers(): number[] {
      return new Array(this.totalPages).fill(0).map((_, index) => index + 1);
    }

    changepage(pagenumber:number):void {
      this.currentPage= pagenumber
      this.buscaralumnoservice.retrieve_requested_page(pagenumber,this.itemsPerPage)
      this.searchquery()
    }

    navigateToFirstPage():void {
      this.currentPage= 1
      this.buscaralumnoservice.retrieve_requested_page(1,this.itemsPerPage)
      this.searchquery()
    }

    //agregarButton(alumnoid:any): void {
      // Clikc de boton de editar,
      //this.abmalumnoservice.retrieve_alumno_id(alumnoid); //guardo el id del alumno para posteriormente saber a que alumno debo traer en las querys
      //console.log(alumnoid) 
      //this.router.navigate(['/alumnos']); //  te lleva a visualizar el abm de alumnos y el correspondiente abm de rutinas

    //}

    editarIdClase(userId: number): void {
      console.log(userId);
      this.asistencia.editUserIdClase(userId).subscribe({
        next: () => {
          console.log(userId);
          this.router.navigateByUrl('/clases-asistencia-admi');
          //Navego a la ruta clases-asistencia luego de hacer la modificacion
        },
        error: (error) => {
          alert('Credenciales inválidas');
        },
        complete: () => {
          console.log('Operación de edición completa');
        }
      });
    }
}