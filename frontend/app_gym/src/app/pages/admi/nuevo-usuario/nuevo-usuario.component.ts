import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  ngOnInit() {
    this.nuevousuarioForm = this.formBuilder.group({
      nombre : ['', Validators.required],       //Validators.pattern('/^[A-Za-z\s']+$/')
      apellido: ['', Validators.required],
      mail : ['', Validators.required],         //Validators.email
      telefono : ['', Validators.required],     //Validators.pattern('/^\d{10}$/')
      documento : ['', Validators.required],    //Validators.pattern('/^\d{10}$/')
      edad : ['', Validators.required],         //Validators.pattern('/^\d{10}$/')
      sexo : ['', Validators.required],
      titulo : ['', Validators.required],
      disponibilidad : ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    })
  }

  submit() {
    if(this.nuevousuarioForm.valid) {
      console.log('Form nuevo usario: ',this.nuevousuarioForm.value);
      this.router.navigateByUrl('abm-usuario')
      //this.login(this.nuevousuarioForm.value)
    } else {
      alert('Formulario no completo');
    }
  }
}

