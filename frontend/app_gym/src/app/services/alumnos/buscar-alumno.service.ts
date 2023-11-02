import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarAlumnoService {
  url='/api';
  search_value=''
  page=1

  constructor(
    private httpClient: HttpClient
  ) {}

    //metodo que me permite asignar el string del valor a buscar en el backend
    retrieve_search_value(search: string){
      console.log('Response from service:', search);
      this.search_value= search;
    }

    retrieve_requested_page(inputpage: any){
      console.log('Requested page:', inputpage);
      this.page= inputpage;

    }

    //metodo que me conecta el backend para traer el listado de alumnos
    getUsers() {
      let auth_token = localStorage.getItem('token')

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      //Envio la query a buscar por nombre o apellido del alumno
      //Ademas especifico que pagina quiero, por defecto trae la primer pagina
      return this.httpClient.get(this.url + '/usuariosalumnos?search='+this.search_value+'&page='+this.page, {headers: headers});

    };



}
