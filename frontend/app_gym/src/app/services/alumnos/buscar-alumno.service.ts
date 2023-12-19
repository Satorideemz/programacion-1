import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarAlumnoService {
  url='/api';
  search_value=''
  page=1
  per_page=4

  constructor(
    private httpClient: HttpClient
  ) {}

    //metodo que me permite asignar el string del valor a buscar en el backend
    retrieve_search_value(search: string){
      console.log('Response from service:', search);
      this.search_value= search;
    }

    retrieve_requested_page(inputpage: any, inputper_page: any){
      console.log('Requested page:', inputpage);
      console.log('Requested per_page:', inputper_page);
      this.page= inputpage;
      //this.per_page= inputper_page;

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

                                                        
      return this.httpClient.get(this.url + '/usuariosalumnos?search='+this.search_value+'&per_page='+this.per_page+'&page='+this.page, {headers: headers});

    };



}
