import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginaService } from '../pagina.service';
import { UserService } from '../user.service';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[UserService]
})
export class NavbarComponent {
  public valor: string | undefined;
  public tipoUsuario: string | undefined;
  public nombre: string | undefined;

  constructor(private router: Router, private pagina: PaginaService,public userService: UserService, private auth:Auth) {
    this.pagina.valor$.subscribe(valor => {
      this.valor = valor;
    });
    this.pagina.tipoUsuario$.subscribe(tipoUsuario => {
      this.tipoUsuario = tipoUsuario;
    });
    this.pagina.nombre$.subscribe(nombre => {
      this.nombre = nombre;
    });
  }

  LogOut(){
    console.log('hola');
    this.userService.logout()
    .then(response=>{
      console.log(response)
    })
    .catch(err=> console.log(err));
  }


  ver(valor: string) {
    if (valor.trim() == 'fotos') {
      this.router.navigate(['/galeria']);
    }
    if (valor.trim() == 'precios') {
      this.router.navigate(['/habitaciones']);
    }
    if (valor.trim() == 'habitaciones') {
      this.router.navigate(['/habitaciones']);
    }
    if (valor.trim() == 'reservar') {
      this.router.navigate(['/servicios', '']);
    }
    if (valor.trim() == 'sobre') {
      this.router.navigate(['/nosotros']);
    }
    if (valor.trim() == 'opiniones') {
      this.router.navigate(['/nosotros']);
    }
  }
}
