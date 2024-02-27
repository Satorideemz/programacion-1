import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbmAlumnosService } from 'src/app/services/alumnos/abm-alumnos.service';

@Component({
  selector: 'app-pagos-puntual-admi',
  templateUrl: './pagos-puntual-admi.component.html',
  styleUrls: ['./pagos-puntual-admi.component.css']
})
export class PagosPuntualAdmiComponent {
  abmalumno! : FormGroup;
  arrayAlumno:any;  

constructor(private router: Router,
  private route: ActivatedRoute,
  private formBuilder: FormBuilder,
  private abm_alumnos: AbmAlumnosService,){
      this.abmalumno = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        estado_de_la_cuenta: ['', Validators.required],
        fecha_pago: ['', Validators.required],
      });
  }

  ngOnInit() {
    //Traigo los datos de pagos que deseo editar

    this.abm_alumnos.getUsers().subscribe((data: any) => {
      console.log('JSON data', data);
      this.arrayAlumno = data.alumnos;
      //Coloco sus atributos en los campos del formulario
      this.abmalumno = this.formBuilder.group({
        nombre: [this.arrayAlumno[0].alumno_detalle.nombre, [Validators.required]],    
        apellido: [this.arrayAlumno[0].alumno_detalle.apellido, [Validators.required]],
        estado_de_la_cuenta : [this.arrayAlumno[0].estado_de_la_cuenta, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],   
        fecha_pago : [this.arrayAlumno[0].fecha_pago, [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],  
      });
    });
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
 

    //Traigo al servicio que invocara el PUT para editar alumnos
    editStudent(dataUser: any = {}, userId: number): void {
      console.log('Comprobando credenciales');
      this.abm_alumnos.editStudent(userId, dataUser).subscribe({
        next: () => {
          console.log(dataUser);
          this.router.navigateByUrl("/pagos-admi");
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



