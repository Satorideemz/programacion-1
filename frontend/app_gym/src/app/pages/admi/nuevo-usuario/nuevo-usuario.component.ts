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
    // Me aseguro antes que el formulario tenga valores válidos antes de enviar
    if (this.abmalumno.valid) {
      console.log('Form nuevo usuario: ', this.abmalumno.value);
      
      // Get the maximum ID synchronously
      this.abm_alumnos.getmaxid().subscribe((maxId: any) => {
        // Create student with the obtained ID
        const studentData = { "id_Usuario": maxId+1, "estado_de_la_cuenta": "Al dia" };
  
        // Create user and student
        this.createUser(this.abmalumno.value, studentData);
      });
    } else {
      alert('Formulario inválido');
    }
  }
  
  createUser(dataUser: any = {}, studentData: any = {}): void {
    console.log('Comprobando credenciales');
    
    this.abm_alumnos.createUser(dataUser).subscribe({
      next: () => {
        console.log(dataUser);
        // Crea el estudiante luego de que se crea el usuario
        this.createStudent(studentData);
      },
      error: (error) => {
        alert('Error al crear usuario');
      },
      complete: () => {
        console.log('Operación de alta completa');
      }
    });
  }
  
  createStudent(dataUser: any = {}): void {
    console.log('Comprobando credenciales');
    this.abm_alumnos.createStudent(dataUser).subscribe({
      next: () => {
        console.log(dataUser);
        this.router.navigateByUrl('/home');
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
