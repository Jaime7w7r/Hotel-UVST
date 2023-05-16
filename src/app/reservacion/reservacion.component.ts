import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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
  
  usdToEur: number | undefined;
  usdToGbp: number | undefined;

  hab: string = '';

  constructor(
    private exchangeRateAPIService: ExchangeRateAPIService,
    private pagina: PaginaService,
    private route: ActivatedRoute
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
  }

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  habitacion: string = '';
  fecha: string = '';

  guardarReservacion(event: Event) {
    event.preventDefault();

    if (!this.nombre || !this.apellido || !this.telefono || !this.correo || !this.hab) {
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

    // Obtener el array actual de reservaciones del Local Storage
    const reservacionesString = localStorage.getItem('reservaciones');
    const reservaciones = reservacionesString ? JSON.parse(reservacionesString) : [];

    // Agregar la nueva reservación al array
    reservaciones.push(reservacion);

    // Guardar el array actualizado en el Local Storage
    localStorage.setItem('reservaciones', JSON.stringify(reservaciones));

    // Limpiar el formulario
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.correo = '';
    this.habitacion = '';

    // Mostrar mensaje de éxito o realizar otras acciones necesarias
    console.log('Reservación guardada exitosamente:', reservacion);
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Reservación guardada exitosamente',
    })
  }

  disableSelect = new FormControl(false);


  onSubmit(formulario: NgForm) {
    console.log(formulario.value);
    console.log(formulario.value);
    // Resto del código para procesar los datos del formulario
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
