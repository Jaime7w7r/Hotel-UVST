import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Usuario {
  nombre: string;
  apellido: string;
  contraseña: string;
  telefono: string;
  correo: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nombre!: string;
  apellido!: string;
  contrasena!: string;
  telefono!: string;
  correo!: string;

  @Output() registroExitoso = new EventEmitter<void>();


  constructor(private http: HttpClient) { }

  guardarUsuario(): void {
    // Validar los campos antes de enviar el formulario
    if (!this.nombre || !this.apellido || !this.contrasena || !this.telefono || !this.correo) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos requeridos'
      });
      return;
    }

    const usuario: Usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      contraseña: this.contrasena,
      telefono: this.telefono,
      correo: this.correo
    };

    this.http.post('https://fire-base-con.vercel.app/postUser', usuario).subscribe(
      () => {
        console.log('Usuario guardado exitosamente');
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Reservación guardada exitosamente',
        });
        this.registroExitoso.emit();
      },
      (error) => {
        console.error('Error al guardar el usuario:', error);
      }
    );
  }
}
