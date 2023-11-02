import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseAsistenciaService } from 'src/app/services/clases/clases-asistencia-admi.service';

@Component({
  selector: 'app-clases-asistencia-admi',
  templateUrl: './clases-asistencia-admi.component.html',
  styleUrls: ['./clases-asistencia-admi.component.css']
})
export class ClasesAsistenciaAdmiComponent implements OnInit {
  alumnos: any[] = [];
  id_Clase: any;

  constructor(
    private router: Router,
    private http : HttpClient,
    private claseAsistenciaService: ClaseAsistenciaService,
  ) {}

  ngOnInit() {
    this.claseAsistenciaService.getAlumnosDeClase().subscribe((data: any) => {
      this.alumnos = data.alumnos;
    });
  }

}
