import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  reservaciones: any[] = [];

  constructor(private http: HttpClient, private pagina: PaginaService) {
    pagina.setValor('reservaciones');
  }

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(): void {
    this.http.get<any[]>('https://fire-base-con.vercel.app/getResev')
      .subscribe(
        (reservaciones) => {
          this.reservaciones = reservaciones;
        },
        (error) => {
          console.log('Error al obtener las reservaciones:', error);
        }
      );
  }
}
