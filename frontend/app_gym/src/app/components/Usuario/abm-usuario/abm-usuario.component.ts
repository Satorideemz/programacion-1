import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent {
  abmalumno! : FormGroup;
  arrayUsuario:any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private abm_alumnos: AbmAlumnosService ) { 
                
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
    this.abm_alumnos.getUsers().subscribe((data: any) => {
      console.log('JSON data', data);
      this.arrayUsuario = data.alumnos;
      //Coloco sus atributos en los campos del formulario
      this.abmalumno = this.formBuilder.group({
        nombre: [this.arrayUsuario[0].alumno_detalle.nombre, [Validators.required]],     //Validators.pattern('/^[A-Za-z\s']+$/')
        apellido: [this.arrayUsuario[0].alumno_detalle.apellido, [Validators.required]],
        mail : [this.arrayUsuario[0].alumno_detalle.mail, [Validators.required,Validators.email]],         //Validators.email
        telefono : [this.arrayUsuario[0].alumno_detalle.telefono, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],          //Validators.pattern('/^\d{10}$/')
        documento : [this.arrayUsuario[0].alumno_detalle.dni, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
        edad : [this.arrayUsuario[0].alumno_detalle.edad, [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
        sexo : [this.arrayUsuario[0].alumno_detalle.sexo, Validators.required],        

      });
    });
  }
  
  confirmDelete(userId: number): void {
    const confirmed = window.confirm('Estás seguro de que deseas borrar este usuario?');
    if (confirmed) {
      // Si confirma el borrado, invoco al servicio de borrar usuario
      this.abm_alumnos.deleteUser(userId).subscribe({
        next: () => {
          console.log('Usuario eliminado con éxito.');
          this.router.navigate(['/buscar-usuario']); // Redirecciono a buscar usuario
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
    //Boton de guardar cambios
    submit(userId: number): void {
      //Me aseguro antes que el formulario tenga valores validos antes de enviar
      if (this.abmalumno.valid) {
        console.log('Form login: ', this.abmalumno.value);
        this.edituser(this.abmalumno.value, userId);
      } else {
        alert('Formulario inválido');
      }
    }
    //Traigo al servicio que invocara el PUT
    edituser(dataUser: any = {}, userId: number): void {
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
    
}