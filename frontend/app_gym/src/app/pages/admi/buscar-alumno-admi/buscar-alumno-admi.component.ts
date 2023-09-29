import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar-alumno-admi',
  templateUrl: './buscar-alumno-admi.component.html',
  styleUrls: ['./buscar-alumno-admi.component.css']
})

export class BuscarAlumnoAdmiComponent {
  alumno_id!: string;
  nombre!: string;
  apellido!: string;

  constructor(
    private route:ActivatedRoute

  ) { }

  showVerAlumno: boolean = false;

  ngOnInit(): void {
    this.alumno_id = this.route.snapshot.paramMap.get('alumno_id') || '';
    this.nombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.apellido = this.route.snapshot.paramMap.get('apellido') || '';  

    console.log('this.usuario_id: ',this.alumno_id);
    console.log('this.detalles: ',this.nombre);
    console.log('this.detallesgenerales: ',this.apellido);

  }


}