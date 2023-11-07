import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasesAsistenciaService {
  url='/api';
  alumno_id=""
  constructor(
    private httpClient: HttpClient
  ) {}



  getallalumnos() {
    let auth_token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(this.url + '/usuariosalumnos?asistencias=', {headers: headers});

  };



}
