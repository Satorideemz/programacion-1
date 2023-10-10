import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})





export class NuevoUsuarioComponent {
  nuevousuarioForm!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}




  // ------------------------VALIDACION DE PASSWORD -------------------------------
  //Validators.minLength(8),  // Longitud mínima de 8 caracteres
  //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),  // Requiere al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
  //--------------------------------------------------------

  ngOnInit() {
    this.nuevousuarioForm = this.formBuilder.group({
      nombre : ['', [Validators.required, nameValidator()]],       //Validators.pattern('/^[A-Za-z\s']+$/')
      apellido: ['', [Validators.required, nameValidator()]],
      mail : ['', [Validators.required,Validators.email]],         //Validators.email
      telefono : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],     //Validators.pattern('/^\d{10}$/')
      documento : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(25)]],    //Validators.pattern('/^\d{10}$/')
      edad : ['', [Validators.required,Validators.minLength(1), Validators.maxLength(5)]],         //Validators.pattern('/^\d{10}$/')
      sexo : ['', Validators.required],
      titulo : [''],
      disponibilidad : [''],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    })
  }

  submit() {
    if(this.nuevousuarioForm.valid) {
      console.log('Form nuevo usario: ',this.nuevousuarioForm.value);
      this.router.navigateByUrl('abm-usuarios')
      //this.login(this.nuevousuarioForm.value)
    } else {
      alert('Formulario no completo');
    }
  }
}

// Función de validación personalizada para nombres de usuario
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z]+$/.test(control.value); // Patrón de validación para nombres de usuario
    return valid ? null : { invalidName: { value: control.value } };
  };
}
