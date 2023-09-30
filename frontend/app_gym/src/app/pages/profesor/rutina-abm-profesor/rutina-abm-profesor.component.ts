import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutina-abm-profesor',
  templateUrl: './rutina-abm-profesor.component.html',
  styleUrls: ['./rutina-abm-profesor.component.css']
})
export class RutinaABMProfesorComponent {

  id_rutina!: string;
  nombre!: string;
  detalles!: string;

  constructor(
    private route:ActivatedRoute

  ) { }

  showVerAlumno: boolean = false;

  ngOnInit(): void {
    this.id_rutina = this.route.snapshot.paramMap.get('id_rutina') || '';
    this.nombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.detalles = this.route.snapshot.paramMap.get('detalles') || '';  

    console.log('this.usuario_id: ',this.id_rutina);
    console.log('this.detalles: ',this.nombre);
    console.log('this.detallesgenerales: ',this.detalles);

  }


}