import { Component } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';
import { AbmProfesoresService } from 'src/app/services/profesores/abm-profesores.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})


export class NuevoUsuarioComponent {
  abmusuario! : FormGroup;
  abmprofesor! : FormGroup;
  arrayAlumno:any;
  arrayProfesor:any;
  buttonId: number = 0;

  constructor (
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private abm_alumnos: AbmAlumnosService,
    private abm_profesores: AbmProfesoresService)
     //Este constructor me da el parametro del boton, 1 para buscar alumnos y 2 para profesor 
     {
      this.route.queryParams.subscribe(params => { 
        this.buttonId = params['id'];
      });    
        this.abmusuario = this.formBuilder.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          mail: ['', [Validators.required, Validators.email]],
          documento: ['', Validators.required],
          telefono: ['', Validators.required],
          password: ['', Validators.required],
          edad: ['', Validators.required],
          sexo: ['', Validators.required],
        });

        this.abmprofesor = this.formBuilder.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          mail: ['', [Validators.required, Validators.email]],
          documento: ['', Validators.required],
          telefono: ['', Validators.required],
          password: ['', Validators.required],
          edad: ['', Validators.required],
          sexo: ['', Validators.required],
          titulo : ['', Validators.required],
          disponibilidad : ['', Validators.required],
        });
    }
    //Obtengo el id del boton para saber que debo mostrar, si alumnos o si profesor

  ngOnInit() {
    //Traigo los datos del usuario que deseo editar

        this.abmusuario= this.formBuilder.group({
          nombre: ['', [Validators.required]],     //Validators.pattern('/^[A-Za-z\s']+$/')
          apellido: ['', [Validators.required]],
          mail : ['', [Validators.required,Validators.email]],         //Validators.email
          telefono : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],          //Validators.pattern('/^\d{10}$/')
          dni : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
          edad : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
          sexo : ['', Validators.required],        
          password: ['', Validators.required],
          //confirmpassword: ['', Validators.required],
        });
 
    
    if (this.mybuttonId== 2){
      this.abmprofesor= this.formBuilder.group({   
        titulo : [''],
        disponibilidad : [''],
        //confirmpassword: ['', Validators.required],
      });

    }
  }

  get mybuttonId(){
    return this.buttonId
  }

  submit() {
    if (this.mybuttonId== 1){
    // Me aseguro antes que el formulario tenga valores válidos antes de enviar
      if (this.abmusuario.valid) {
        console.log('Form nuevo usuario: ', this.abmusuario.value);
        // Get the maximum ID synchronously
        this.abm_alumnos.getmaxid().subscribe((maxId: any) => {
          // Create student with the obtained ID
          const studentData = { "id_Usuario": maxId+1, "estado_de_la_cuenta": "Al dia" };
    
          // Create user and student
          this.createUser(this.abmusuario.value, studentData);
        });
      } else {
        alert('Formulario inválido');
      }
    }
    if (this.mybuttonId == 2){         
      if (this.abmprofesor.valid) {
        console.log('Form nuevo profesor: ', this.abmprofesor.value);
        // Get the maximum ID for the teacher synchronously
        this.abm_profesores.getmaxid().subscribe((maxId: any) => {
        // Add the obtained ID to the teacher data
        this.abmprofesor.value.id_Usuario = maxId;
        // Create teacher data first
        this.createUser(this.abmusuario.value,this.abmprofesor.value)


        });
      } else {
        alert('Formulario inválido');
        }
  
      }
  }

    

  
  createUser(dataUser: any = {}, ownData: any = {}): void {

      console.log('Comprobando credenciales');
      this.abm_alumnos.createUser(dataUser).subscribe({
        next: () => {
          if (this.mybuttonId == 1){
            console.log(dataUser);
            // Crea el estudiante luego de que se crea el usuario
            this.createStudent(ownData);
          }
          if (this.mybuttonId == 2){
            console.log(dataUser);
            // Crea el profesor, luego de que se crea el usuario
            this.createTeacher(ownData);  
          }
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

  createTeacher(dataUser: any = {}): void {
    console.log('Comprobando credenciales');
    this.abm_profesores.createTeacher(dataUser).subscribe
    ({
      next: () => {
        console.log(dataUser);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        alert('Error al crear datos propios del profesor');
      },
      complete: () => {
        console.log('Operación de alta completa');
      }
    });
  }      
}