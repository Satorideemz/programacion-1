import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Router, Route } from '@angular/router';
import { VerClasesService } from 'src/app/services/clases/ver-clases.service';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.css']
})

export class ListaAsistenciaComponent implements OnChanges {

  @Input() classeditInput!: boolean;
  arrayAsistencia: any;


  constructor(private router: Router,
    private asistencia: VerClasesService) { }


    ngOnInit() {
      console.log("Initial value: "+this.classeditInput)
      this.get_query()
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("Refreshed value: "+this.classeditInput)
      this.get_query() 
    }

    get_query(){
      // Traigo las asistencias de las clases
      this.asistencia.getAsistencia().subscribe((data: any) => {
        console.log('JSON data', data);
        console.log('arrayAsistencia:', data.usuarios); // Ajusta el nombre de la propiedad aquí
        this.arrayAsistencia = data.usuarios;
      }); 
    }


    borrarIdClase(userId: number): void {
      console.log(userId);
      
      this.asistencia.borrarIdClase(userId).subscribe({
        next: () => {
          console.log(userId);
        },
        error: (error) => {
          alert('Credenciales inválidas');
        },
        complete: () => {
          console.log('Operación de edición completa, id_clase null');
          //cada vez que se un item borra refresca la lista
          this.get_query() 
        }
      });
    }
}
