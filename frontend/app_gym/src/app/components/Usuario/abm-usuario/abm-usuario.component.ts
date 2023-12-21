import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';
import { AbmProfesoresService } from 'src/app/services/profesores/abm-profesores.service';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent {
  abmalumno! : FormGroup;
  abmprofesor!: FormGroup;
  arrayAlumno:any;
  arrayProfesor:any;
  buttonId: number = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private abm_alumnos: AbmAlumnosService,
              private abm_profesores: AbmProfesoresService ) {
                this.route.queryParams.subscribe(params => { 
                  this.buttonId = params['id'];
                });
              
                  this.abmalumno = this.formBuilder.group({
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


  // ngOnInit() {
  //   this.abm_alumnos.getUsers().subscribe((data:any) =>{
  //     console.log('JSON data', data);
  //     this.arrayUsuario = data.alumnos

  //     this.abmalumno = this.formBuilder.group({
  //       nombre : ['pepe', [Validators.required]],       //Validators.pattern('/^[A-Za-z\s']+$/')
  //       apellido: ['', [Validators.required]],
  //       mail : ['', [Validators.required,Validators.email]],         //Validators.email
  //       telefono : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],     //Validators.pattern('/^\d{10}$/')
  //       documento : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
  //       edad : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
  //       sexo : ['', Validators.required],
  //       titulo : [''],
  //       disponibilidad : [''],
  //       password: ['', Validators.required],
  //       confirmpassword: ['', Validators.required],
  //     }
  //     );  

  //   })
  // }


  ngOnInit() {
    //Traigo los datos del usuario que deseo editar
    if (this.mybuttonId== 1){
      this.abm_alumnos.getUsers().subscribe((data: any) => {
        console.log('JSON data', data);
        this.arrayAlumno = data.alumnos;
        //Coloco sus atributos en los campos del formulario
        this.abmalumno = this.formBuilder.group({
          nombre: [this.arrayAlumno[0].alumno_detalle.nombre, [Validators.required]],     //Validators.pattern('/^[A-Za-z\s']+$/')
          apellido: [this.arrayAlumno[0].alumno_detalle.apellido, [Validators.required]],
          mail : [this.arrayAlumno[0].alumno_detalle.mail, [Validators.required,Validators.email]],         //Validators.email
          telefono : [this.arrayAlumno[0].alumno_detalle.telefono, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],          //Validators.pattern('/^\d{10}$/')
          documento : [this.arrayAlumno[0].alumno_detalle.dni, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
          edad : [this.arrayAlumno[0].alumno_detalle.edad, [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
          sexo : [this.arrayAlumno[0].alumno_detalle.sexo, Validators.required],        

        });
      });
    }

    if (this.mybuttonId== 2){
      this.abm_profesores.getUsers().subscribe((data: any) => {
        console.log('JSON data', data);
        this.arrayProfesor = data.profesores;
        //Coloco sus atributos en los campos del formulario
        this.abmprofesor = this.formBuilder.group({
          nombre: [this.arrayProfesor[0].profesor_detalle.nombre, [Validators.required]],     //Validators.pattern('/^[A-Za-z\s']+$/')
          apellido: [this.arrayProfesor[0].profesor_detalle.apellido, [Validators.required]],
          mail : [this.arrayProfesor[0].profesor_detalle.mail, [Validators.required,Validators.email]],         //Validators.email
          telefono : [this.arrayProfesor[0].profesor_detalle.telefono, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],          //Validators.pattern('/^\d{10}$/')
          documento : [this.arrayProfesor[0].profesor_detalle.dni, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
          edad : [this.arrayProfesor[0].profesor_detalle.edad, [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
          sexo : [this.arrayProfesor[0].profesor_detalle.sexo, Validators.required], 
          titulo : [this.arrayProfesor[0].titulo, Validators.required],
          disponibilidad : [this.arrayProfesor[0].disponibilidad, Validators.required]

        });
      });
    }  
  

  }
  
  get mybuttonId(){
    return this.buttonId
  }


  //Boton de confirmacion para borrar usuario
  confirmDelete_User(userId: number): void {
    const confirmed = window.confirm('Estás seguro de que deseas borrar este usuario?');
    if (confirmed) {
      // Si confirma el borrado, invoco al servicio de borrar usuario
      this.abm_alumnos.deleteUser(userId).subscribe({
        next: () => {
          console.log('Usuario eliminado con éxito.');
          this.router.navigate(['/home']); // Redirecciono a buscar usuario
        },
        error: (error) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Error al eliminar el usuario. Por favor, intenta de nuevo más tarde.');
        },
        complete: () => {
          console.info('Operación de eliminación completa.');
        }
      });
    } else {
      // Se cancela la confirmacion de borrar usuario y regresa al formulario
    }
  }


    //Boton de guardar cambios para los alumnos
    submit_student(userId: number): void {
      //Me aseguro antes que el formulario tenga valores validos antes de enviar
      if (this.abmalumno.valid) {
        console.log('Form login: ', this.abmalumno.value);
        this.editStudent(this.abmalumno.value, userId);
      } else {
        alert('Formulario inválido');
      }
    }

    //Boton de guardar cambios para los profesores
    submit_teacher(userId: number,teacher_id: number): void {
      //Me aseguro antes que el formulario tenga valores validos antes de enviar
      if (this.abmprofesor.valid) {
        console.log('Form login: ', this.abmprofesor.value);
        this.editTeacher(this.abmprofesor.value, userId);
        this.editTeacherDetails(this.abmprofesor.value, teacher_id);
      } else {
        alert('Formulario inválido');
      }
    }

    //Traigo al servicio que invocara el PUT para editar alumnos
    editStudent(dataUser: any = {}, userId: number): void {
      console.log('Comprobando credenciales');
      this.abm_alumnos.editUser(userId, dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl('/abm-usuario');
          //Navego a la ruta abm-usuario luego de hacer la modificacion
        },
        error: (error) => {
          alert('Credenciales inválidas');
        },
        complete: () => {
          console.log('Operación de edición completa');
        }
      });
    }

    //Traigo al servicio que invocara el PUT para editar profesor
    editTeacher(dataUser: any = {}, userId: number): void {
      console.log('Comprobando credenciales');
      this.abm_profesores.editUser(userId, dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl('/abm-usuario');
          //Navego a la ruta abm-profesor luego de hacer la modificacion
        },
        error: (error) => {
          alert('Credenciales inválidas');
        },
        complete: () => {
          console.log('Operación de edición completa');
        }
      });
    } 

    //Servicio PUT para los detalles puntuales del profesor
    editTeacherDetails(dataUser: any = {}, userId: number): void {
      console.log('Comprobando credenciales');
      this.abm_profesores.editTeacher(userId, dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl('/abm-usuario');
          //Navego a la ruta abm-profesor luego de hacer la modificacion
        },
        error: (error) => {
          alert('Credenciales inválidas');
        },
        complete: () => {
          console.log('Operación de edición de profesor completa');
        }
      });
    }        
    
}