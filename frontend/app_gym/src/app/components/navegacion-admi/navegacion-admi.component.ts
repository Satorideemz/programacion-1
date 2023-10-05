import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion-admi',
  templateUrl: './navegacion-admi.component.html',
  styleUrls: ['./navegacion-admi.component.css']
})
export class NavegacionAdmiComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  get isToken(){
    return localStorage.getItem('token');
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigateByUrl('home')
  }
}

