import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  componentes!: any[];
  password!: any[];

  constructor(private http: HttpClient, private pagina: PaginaService) {
    pagina.setValor('usuarios');
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.http.get<any[]>('https://fire-base-con.vercel.app/getUser')
      .subscribe(
        response => {
          this.componentes = response;
        },
        error => {
          console.log('Error al obtener los usuarios:', error);
        }
      );
  }
}
