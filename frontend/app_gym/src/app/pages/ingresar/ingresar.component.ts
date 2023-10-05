import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  constructor (
    private authservices: AuthService,
    private router: Router
  ) {}

  login(dataLogin:any = {}) {
    dataLogin = { mail: "f@mail.com", password:"123"}
    console.log('Comprobando credenciales');
    this.authservices.login(dataLogin).subscribe ({
      next: (rta:any) => {
        alert('Login exitoso');
        console.log ('Respuesta login:',rta.access_token);
        localStorage.setItem('token',rta.access_token);
        this.router.navigateByUrl('home')
      }, 
      error:(error) => {
        alert('Credenciales invalidas');
        localStorage.removeItem('token');
      },complete: () => {
        console.log ('Finalizo');

      }
    })
  }
}
