import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  reservaciones: any[] = [];
  public correoBuscado!: string;

  constructor(private http: HttpClient, private pagina: PaginaService, private router: Router) {
    pagina.setValor('reservaciones');
  }

  ngOnInit(): void {
    this.obtenerReservaciones();
    this.correoBuscado = this.pagina.getCorreo();
  }

  obtenerReservaciones(): void {
    this.http.get<any[]>('https://fire-base-con.vercel.app/getResev')
      .subscribe(
        (reservaciones) => {
          this.reservaciones = reservaciones.filter(reservacion => reservacion.correo === this.correoBuscado);
        },
        (error) => {
          console.log('Error al obtener las reservaciones:', error);
        }
      );
  }
  onClick(id: string) {
    const url = `https://fire-base-con.vercel.app/deleteResev/${id}`;

    this.http.delete(url).subscribe(
      () => {
        console.log('Reservación eliminada correctamente');
        this.router.navigate(['/inicio']);
      },
      (error) => {
        console.log('Error al eliminar la reservación:', error);
      }
    );
  }
}
