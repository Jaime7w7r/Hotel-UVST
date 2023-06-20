import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaginaService } from '../pagina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private pagina: PaginaService) {
    pagina.setValor('contactanos');
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      asunto: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.formulario.valid) {
      console.log('Formulario enviado');
      console.log('Asunto:', this.formulario.value.asunto);
      console.log('Nombre:', this.formulario.value.nombre);
      console.log('Correo Electrónico:', this.formulario.value.correo);
      console.log('Teléfono:', this.formulario.value.telefono);
      console.log('Mensaje:', this.formulario.value.mensaje);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Enviado, pronto nos comunicaremos contigo',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos requeridos'
      });
      return;

    }
  }
}
