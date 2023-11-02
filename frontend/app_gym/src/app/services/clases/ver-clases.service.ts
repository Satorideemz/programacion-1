import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerClasesService {
  url='/api';
  clase_id=""
  constructor(
    private httpClient: HttpClient
  ) {}

  retrieve_clase_id(clase: string){
    console.log('Response from service:', clase);
    this.clase_id= clase;
  }

  getallClases() {
    let auth_token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(this.url + '/clases', {headers: headers});

  };



}
