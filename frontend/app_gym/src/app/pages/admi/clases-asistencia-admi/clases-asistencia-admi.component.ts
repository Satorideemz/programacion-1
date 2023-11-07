
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesAsistenciaService } from 'src/app/services/clases/clases-asistencia-admi.service';

@Component({
  selector: 'app-clases-asistencia-admi',
  templateUrl: './clases-asistencia-admi.component.html',
  styleUrls: ['./clases-asistencia-admi.component.css']
})
export class ClasesAsistenciaAdmiComponent {


  arrayAsistencia: any = []; // Inicializa como un arreglo vacío

  constructor(private router: Router,
    private claseasistencia: ClasesAsistenciaService ) { }


    ngOnInit(){
      this.claseasistencia.getallalumnos().subscribe((data:any)=>{
        console.log('JSON data', data.alumnos);
        console.log('Datos del servicio:', data);
        this.arrayAsistencia = data.alumnos


      })
    }


}
