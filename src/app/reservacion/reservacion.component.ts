import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

import { CalendarioComponent } from '../Calendario/Calendario.component';
import { Calendar } from 'primeng/calendar';
import { ExchangeRateAPIService } from '../exchange-rate-api.service';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  @ViewChild('fechaInput')
  fechaInput!: CalendarioComponent;
  rangeDates: Date[];

  public apellido!: string;
  public nombre!: string;
  public telefono!: string;
  public correo!: string;

  getnombre!: string;

  usdToEur: number | undefined;
  usdToGbp: number | undefined;

  hab: string = '';

  constructor(
    private exchangeRateAPIService: ExchangeRateAPIService,
    private pagina: PaginaService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.rangeDates = [];
    pagina.setValor('servicios');
  }

  ngOnInit() {
    this.apellido = this.pagina.getApellido();
    this.nombre = this.pagina.getNombre();
    this.telefono = this.pagina.getTelefono();
    this.correo = this.pagina.getCorreo();

    this.exchangeRateAPIService.getExchangeRates('USD').then(data => {
      this.usdToEur = data.conversion_rates.EUR;
      this.usdToGbp = data.conversion_rates.GBP;
    }).catch(error => {
      console.error('Error al obtener las tasas de cambio:', error);
    });

    const habParam = this.route.snapshot.paramMap.get('hab');
    this.hab = habParam !== null ? habParam : '';
  }

  habitacion: string = '';
  fecha: string = '';

  guardarReservacion(event: Event) {
    event.preventDefault();

    if (!this.hab) {
      Swal.fire({
        icon: 'error',
        title: 'Datos incompletos',
        text: 'Por favor, complete todos los campos requeridos'
      })
      return;
    }
    const fechaSeleccionada = this.fechaInput.rangeDates;

    const reservacion = {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
      habitacion: this.hab,
      fecha: fechaSeleccionada
    };
    console.log(reservacion);
    this.habitacion = '';
    this.fecha = '';


    const url = 'https://fire-base-con.vercel.app/postReservation';

    this.http.post(url, reservacion).subscribe(
      response => {
        console.log('Reservación enviada exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Reservación enviada exitosamente'
        });
      },
      error => {
        console.error('Error al enviar la reservación:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al enviar la reservación'
        });
      }
    );
  }
}