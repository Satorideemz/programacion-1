import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbmProfesoresService {
  url='/api';
  teacher_id=''

  constructor(
    private httpClient: HttpClient
  ) { }
  retrieve_profesor_id(search: string){
    console.log('Response from service:', search);
    this.teacher_id= search;
  }

  getUsers() {
    let auth_token = localStorage.getItem('token')
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    
    //Envio la query a buscar por nombre o apellido del profesor
    return this.httpClient.get(this.url + '/profesores?user_abm='+this.teacher_id, {headers: headers});

  };

  //Metodo que me permite usar el recurso PUT para editar el profesor segun los valores cambiados del formulario
  editUser(userId: number, dataUser: any): Observable<any> {
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    //Edita el profesor segun el id especificado
    return this.httpClient.put(`${this.url}/usuario/${userId}`, dataUser, { headers: headers }).pipe(take(1));
  }  
  

}
