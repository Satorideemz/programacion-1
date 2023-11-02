import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClaseAsistenciaService {
  url = '/api';
  alumnos : any;
  httpClient: any;
  constructor(
    private router: Router,
    private http: HttpClient,


    ) {}

  //metodo que me permite asignar el string del valor a buscar en el backend, trae el id del estudainte para poder ver sus datos
  retrieve_alumno_id(search: string){
    console.log('Response from service:', search);
    this.alumnos= search;
  }

  getAlumnosDeClase() {
    let auth_token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(this.url + '/clases-asistencia-admi'+this.alumnos, {headers: headers})
  };

}
