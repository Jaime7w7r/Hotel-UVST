import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
export class ReservacionComponent {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  habitacion: string = '';
  fecha: string = '';
  hora: string = '';

  guardarReservacion(event: Event) {
    event.preventDefault();

    const reservacion = {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
      habitacion: this.selected,
      fecha: this.fecha,
      hora: this.hora,
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
    this.fecha = '';
    this.hora = '';

    // Mostrar mensaje de éxito o realizar otras acciones necesarias
    console.log('Reservación guardada exitosamente:', reservacion);
  }

  disableSelect = new FormControl(false);
  minDate: Date;
  maxDate: Date;

  constructor(private pagina: PaginaService) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    pagina.setValor('servicios');
  }

  selected = 'option2';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
