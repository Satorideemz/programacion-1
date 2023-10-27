import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AbmAlumnosService {
  url='/api';
  student_id=''

  constructor(
    private httpClient: HttpClient
  ) { }

      //metodo que me permite asignar el string del valor a buscar en el backend
      retrieve_alumno_id(search: string){
        console.log('Response from service:', search);
        this.student_id= search;
      }
      
      getUsers() {
        let auth_token = localStorage.getItem('token')
  
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        })
        
        //Envio la query a buscar por nombre o apellido del alumno
        return this.httpClient.get(this.url + '/usuariosalumnos?user_abm='+this.student_id, {headers: headers});
  
      };

      //Metodo que me permite usar el recurso PUT para editar el alumno segun los valores cambiados del formulario
      editUser(userId: number, dataUser: any): Observable<any> {
        let auth_token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
        //Edita el alumno segun el id especificado
        return this.httpClient.put(`${this.url}/usuario/${userId}`, dataUser, { headers: headers }).pipe(take(1));
      }
      
      //Metodo que me permite borrar 
      deleteUser(userId: number): Observable<any> {
        let auth_token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
      
        //Borra el alumno segun el id especificado
        return this.httpClient.delete(`${this.url}/usuario/${userId}`, { headers: headers }).pipe(take(1));
      }
      
}
