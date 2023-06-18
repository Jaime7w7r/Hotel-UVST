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

  constructor(private pagina: PaginaService, private http: HttpClient, private router: Router) {
    pagina.setValor('login');
  }

  async verificarUsuario(): Promise<void> {
    const response = await this.http.get<Usuario[]>('https://fire-base-con.vercel.app/getUser').toPromise();
    const usuarios = response || [];

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

      this.router.navigate(['/inicio']);
    } else {
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
    this.mostrarLogin = true;
  }
}
