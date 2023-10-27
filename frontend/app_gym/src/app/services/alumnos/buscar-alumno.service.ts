import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarAlumnoService {
  url='/api';
  search_value=''
  constructor(
    private httpClient: HttpClient
  ) {}

    //metodo que me permite asignar el string del valor a buscar en el backend
    retrieve_search_value(search: string){
      console.log('Response from service:', search);
      this.search_value= search;
    }

    //metodo que me conecta el backend para traer el listado de alumnos
    getUsers() {
      let auth_token = localStorage.getItem('token')

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      //Envio la query a buscar por nombre o apellido del alumno
      
      return this.httpClient.get(this.url + '/usuariosalumnos?search='+this.search_value, {headers: headers});

    };



}
