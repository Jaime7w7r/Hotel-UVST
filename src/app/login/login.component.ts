import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from '../pagina.service';
import { HttpClient } from '@angular/common/http';

interface Usuario {
  correo: string;
  contraseña: string;
  nombre: string; // Agrega el campo nombre en la interfaz Usuario
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private pagina: PaginaService, private http: HttpClient, private router: Router) {
    pagina.setValor('login');
  }

  async verificarUsuario(): Promise<void> {
    const response = await this.http.get<Usuario[]>('https://fire-base-con.vercel.app/getUser/').toPromise();
    const usuarios = response || [];

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === this.email && usuario.contraseña === this.password
    );

    if (usuarioEncontrado) {
      console.log('Usuario válido');

      if (usuarioEncontrado.correo === 'admin@gmail.com') {
        console.log('¡Bienvenido, administrador!');
        this.pagina.setTipoUsuario('admin');
      } else {
        this.pagina.setTipoUsuario('user');
      }

      this.pagina.setNombre(usuarioEncontrado.nombre); // Guardar el nombre del usuario

      this.router.navigate(['/inicio']); // Redirigir a la página de inicio
    } else {
      console.log('Usuario inválido');
    }
  }
}
