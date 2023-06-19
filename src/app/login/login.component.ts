import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from '../pagina.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Usuario {
  id: string;
  correo: string;
  contraseña: string;
  nombre: string;
  telefono: string;
  apellido: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  mostrarLogin: boolean = true;
  registroExitoso!: boolean;
  cargando: boolean = false;

  correoValido: boolean = false;
  contraseñaValida: boolean = false;

  constructor(private pagina: PaginaService, private http: HttpClient, private router: Router) {
    pagina.setValor('login');
  }

  async verificarUsuario(): Promise<void> {
    this.cargando = true;
    const response = await this.http.get<Usuario[]>('https://fire-base-con.vercel.app/getUser').toPromise();
    const usuarios = response || [];

    if (this.password.length >= 6) {
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.correo === this.email && usuario.contraseña === this.password
      );

      if (usuarioEncontrado) {
        console.log('Usuario válido');

        if (usuarioEncontrado.correo === 'admin@gmail.com') {
          console.log('administrador');
          this.pagina.setTipoUsuario('admin');
        } else {
          this.pagina.setTipoUsuario('user');
        }

        this.pagina.setNombre(usuarioEncontrado.nombre);
        this.pagina.setId(usuarioEncontrado.id);
        this.pagina.setApellido(usuarioEncontrado.apellido);
        this.pagina.setTelefono(usuarioEncontrado.telefono);
        this.pagina.setCorreo(usuarioEncontrado.correo);

        this.router.navigate(['/inicio']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrecta'
        });
        console.log('Usuario inválido');
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe tener al menos 6 caracteres'
      });
      console.log('Contraseña inválida');
    }

    this.cargando = false;
  }

  mostrarRegistro(): void {
    this.mostrarLogin = false;
  }

  mostrarLoginExitoso(): void {
    this.registroExitoso = true;
    this.mostrarLogin = true;
  }

  validarCorreo(): void {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.correoValido = regex.test(this.email);

    if (!this.correoValido && this.email) {
      const errorMessage = document.querySelector('.error-message');
      errorMessage?.classList.add('show');
    } else {
      const errorMessage = document.querySelector('.error-message');
      errorMessage?.classList.remove('show');
    }
  }

  validarContraseña(): void {
    this.contraseñaValida = this.password.length >= 6;
  }
}
