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
    this.abm_alumnos.getUsers().subscribe((data: any) => {
      console.log('JSON data', data);
      this.arrayUsuario = data.alumnos;
  
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
      // Call the service method to delete the user
      this.abm_alumnos.deleteUser(userId).subscribe({
        next: () => {
          console.log('Usuario eliminado con éxito.');
          this.router.navigate(['/buscar-usuario']); // Redirect to the desired route after deletion
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
      // User clicked Cancel or closed the dialog
      // No action needed
    }
  }


  


  savebutton(): void {
    // Navigate to the desired route when the button is clicked
    this.router.navigate(['/abm-usuario']); // Replace 'your-desired-route' with the actual route you want to navigate to
    

    }

    submit(userId: number): void {
      if (this.abmalumno.valid) {
        console.log('Form login: ', this.abmalumno.value);
        this.edituser(this.abmalumno.value, userId);
      } else {
        alert('Formulario inválido');
      }
    }
    
    edituser(dataUser: any = {}, userId: number): void {
      console.log('Comprobando credenciales');
      this.abm_alumnos.editUser(userId, dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl('/abm-usuario');
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