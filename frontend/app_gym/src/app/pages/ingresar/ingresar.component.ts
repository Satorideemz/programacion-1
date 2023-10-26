import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {
  loginForm!: FormGroup;

  constructor (
    private authservices: AuthService,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

    // ------------------------VALIDACION DE PASSWORD -------------------------------
    //Validators.minLength(8),  // Longitud mínima de 8 caracteres
    //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),  // Requiere al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
    //--------------------------------------------------------



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail:  ['', Validators.required],      //Validators.email
      password: ['', Validators.required]
    })
  }

  login(dataLogin:any = {}) {
    //dataLogin = { mail: "f@mail.com", password:"123"}
    console.log('Comprobando credenciales');
    this.authservices.login(dataLogin).subscribe ({
      next: (rta:any) => {
        //alert('Login exitoso');
        console.log ('Respuesta login:',rta.access_token);
        console.log ('Respuesta login:', this.jwtHelper.decodeToken(rta.access_token));
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
  
  submit() {
    if(this.loginForm.valid) {
      console.log('Form login: ',this.loginForm.value);
      this.login(this.loginForm.value)
    } else {
      alert('Formulario invalido');
    }
  }

}

