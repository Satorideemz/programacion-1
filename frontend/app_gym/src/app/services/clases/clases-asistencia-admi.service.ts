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

  retrieve_alumno_id(alumno: string){
    console.log('Response from service:', alumno);
    this.alumno_id= alumno;
  }

  getallalumnos() {
    let auth_token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(this.url + '/usuariosalumnos', {headers: headers});

  };



}
