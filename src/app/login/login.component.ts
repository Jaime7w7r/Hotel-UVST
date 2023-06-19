import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from '../pagina.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private pagina: PaginaService, private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) {
    pagina.setValor('login');
  }

  async verificarUsuario(): Promise<void> {
    this.spinner.show('spinner');
    const response = await this.http.get<Usuario[]>('https://fire-base-con.vercel.app/getUser').toPromise();
    const usuarios = response || [];

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === this.email && usuario.contraseña === this.password
    );
    this.spinner.hide('spinner');

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
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrecta'
      });
      console.log('Usuario inválido');
    }
  }

  mostrarRegistro(): void {
    this.mostrarLogin = false;
  }

  mostrarLoginExitoso(): void {
    this.registroExitoso = true;
    this.mostrarLogin = true;
  }
}
