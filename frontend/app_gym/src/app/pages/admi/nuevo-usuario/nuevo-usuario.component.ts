import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})





export class NuevoUsuarioComponent {
  abmalumno! : FormGroup;
  arrayUsuario:any;
  buttonId: number = 0;

  constructor (
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private abm_alumnos: AbmAlumnosService
  )
  {   //Este constructor me da el parametro del boton, 1 para buscar alumnos y 2 para profesor 
    this.route.queryParams.subscribe(params => { 
      this.buttonId = params['id'];
      this.abmalumno = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
        dni: ['', Validators.required],
        telefono: ['', Validators.required],
        password: ['', Validators.required],
        edad: ['', Validators.required],
        sexo: ['', Validators.required],
      });
    });
    }

      //Obtengo el id del boton para saber que debo mostrar, si alumnos o si profesor
    get mybuttonId(){
        return this.buttonId
    }



  // ------------------------VALIDACION DE PASSWORD -------------------------------
  //Validators.minLength(8),  // Longitud mínima de 8 caracteres
  //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),  // Requiere al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
  //--------------------------------------------------------

  ngOnInit() {
    //Traigo los datos del usuario que deseo editar

        this.abmalumno= this.formBuilder.group({
          nombre: ['', [Validators.required]],     //Validators.pattern('/^[A-Za-z\s']+$/')
          apellido: ['', [Validators.required]],
          mail : ['', [Validators.required,Validators.email]],         //Validators.email
          telefono : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],          //Validators.pattern('/^\d{10}$/')
          dni : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
          edad : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
          sexo : ['', Validators.required],        

          //titulo : [''],
          //disponibilidad : [''],
          password: ['', Validators.required],
          //confirmpassword: ['', Validators.required],
        }, {
          validators: passwordMatchValidator(),
        });
 
  
  }

  submit() {
     //Me aseguro antes que el formulario tenga valores validos antes de enviar
    if(this.abmalumno.valid) {
      console.log('Form nuevo usario: ',this.abmalumno.value);
      this.createUser(this.abmalumno.value);

      this.createStudent({ "estado_de_la_cuenta" : "al dia"})
    } else {
      alert('Formulario inválido');
    }
  }
    createUser(dataUser: any = {} ): void {
      console.log('Comprobando credenciales');
      this.abm_alumnos.createUser( dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl('/home');
          //Navego a la ruta abm-usuario luego de hacer la modificacion
        },
        error: (error) => {
          alert('Error al crear usuario');
        },
        complete: () => {
          console.log('Operación de alta completa');
        }
      });
    }

    createStudent(dataUser: any = {} ): void {
      console.log('Comprobando credenciales');      
      this.abm_alumnos.createUser( dataUser).subscribe({
        next: () => {
          console.log(dataUser);
        },
        error: (error) => {
          alert('Error al crear datos propios del alumno');
        },
        complete: () => {
          console.log('Operación de alta completa');
        }
      });
    }
    
}

  






// Función de validación personalizada para nombres de usuario
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z]+$/.test(control.value); // Patrón de validación para nombres de usuario
    return valid ? null : { invalidName: { value: control.value } };
  };
}


// Función de validación personalizada para comparar contraseña y confirmar contraseña
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  };




  
}
