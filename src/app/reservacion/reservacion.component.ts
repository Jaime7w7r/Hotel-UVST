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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  @ViewChild('fechaInput')
  fechaInput!: CalendarioComponent;
  rangeDates: Date[];

  getnombre: string = '';
  getapellido: string = '';
  gettelefono: string = '';
  getcorreo: string = '';

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
    this.exchangeRateAPIService.getExchangeRates('USD').then(data => {
      this.usdToEur = data.conversion_rates.EUR;
      this.usdToGbp = data.conversion_rates.GBP;
    });
    const habParam = this.route.snapshot.paramMap.get('hab');
    this.hab = habParam !== null ? habParam : '';


    //Hacer mejor un servicio xd
    this.pagina.id$.subscribe(userId => {
      this.http.get<any>(`https://fire-base-con.vercel.app/getOneUser/${userId}`).subscribe(
        response => {
          console.log("Obtenido")
          console.log(response);
          this.getnombre = response.nombre;
          console.log(response.nombre);
          console.log(this.getnombre);
          this.getapellido = response.apellido;
          this.gettelefono = response.telefono;
          this.getcorreo = response.correo;
        },
        error => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    });
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
    console.log('Nombre' + this.getnombre);

    const reservacion = {
      nombre: this.getnombre,
      apellido: this.getapellido,
      telefono: this.gettelefono,
      correo: this.getcorreo,
      habitacion: this.hab,
      fecha: fechaSeleccionada
    };
    console.log(reservacion);
    // Limpiar el formulario
    this.habitacion = '';
    this.fecha = '';
    /*
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
        );*/
  }

  matcher = new MyErrorStateMatcher();
}
