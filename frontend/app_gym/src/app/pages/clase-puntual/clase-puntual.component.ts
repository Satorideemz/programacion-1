import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clase-puntual',
  templateUrl: './clase-puntual.component.html',
  styleUrls: ['./clase-puntual.component.css']
})
export class ClasePuntualComponent {
  clases: any;
  selectedClase: any; // Variable para almacenar la clase seleccionada

  constructor(

    private http: HttpClient) {}

  // Método para cargar los datos de la clase seleccionada
  cargarClaseSeleccionada(idClase: number) {
    // Realizar una solicitud HTTP para obtener los detalles de la clase
    this.http.get(`/api/clases/${idClase}`).subscribe((data) => {
      this.selectedClase = data;
    });
  }

  // Método para manejar la selección de una clase
  seleccionarClase(idClase: number) {
    this.cargarClaseSeleccionada(idClase);
  }
}
