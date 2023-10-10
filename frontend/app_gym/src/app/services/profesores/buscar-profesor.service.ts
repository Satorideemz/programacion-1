import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarProfesorService {

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
    
    getUsers() {
      let auth_token = localStorage.getItem('token')

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      //Envio la query a buscar por nombre o apellido del profesor
      return this.httpClient.get(this.url + '/profesores?search='+this.search_value, {headers: headers});

    };
}
