import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AbmRutinaService } from 'src/app/services/rutina/abm-rutina.service';

@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editar-rutina.component.html',
  styleUrls: ['./editar-rutina.component.css']
})
export class EditarRutinaComponent implements OnInit {
  hashRutinas: any;
  rutinaForm: FormGroup = new FormGroup({
    estado: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private abm_rutina: AbmRutinaService
  ) {}

  ngOnInit() {
    // Traigo las rutinas
    this.abm_rutina.getRutina().subscribe((data: any) => {
      console.log('JSON data', data);
      console.log(data.planificaciones[0]);
      this.hashRutinas = data.planificaciones[0];
      // Actualiza los valores del formulario con los datos obtenidos
      this.rutinaForm.setValue({
        estado: this.hashRutinas.estado,
        fecha: this.hashRutinas.fecha,
        descripcion: this.hashRutinas.detalles
      });
    });
  }

  // Boton de guardar cambios
  guardado(rutinaid: number): void {
    if (this.rutinaForm.valid) {
      // El formulario es válido, puedes proceder con la solicitud PUT
      this.putRutina(this.rutinaForm.value, rutinaid);
    } else {
      // El formulario no es válido, muestra un mensaje de error o realiza una acción apropiada
      alert('Formulario inválido. Asegúrate de completar todos los campos.');
    }
  }

  // Traigo al servicio que invocará el PUT
  putRutina(rutinadata: any = {}, rutinaId: number): void {
    console.log('Comprobando credenciales');
    console.log(rutinadata)
    this.abm_rutina.putRutina(rutinaId, rutinadata).subscribe({
      next: () => {
        console.log(rutinadata);
        this.router.navigateByUrl('/rutina-abm');
        // Navego a la ruta rutina-abm luego de hacer la modificación
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

