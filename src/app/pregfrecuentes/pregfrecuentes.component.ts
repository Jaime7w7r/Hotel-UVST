import { Component } from '@angular/core';

interface Pregunta {
  pregunta: string;
  respuesta: string;
  mostrarRespuesta: boolean;
}

@Component({
  selector: 'app-pregfrecuentes',
  templateUrl: './pregfrecuentes.component.html',
  styleUrls: ['./pregfrecuentes.component.css']
})
export class PregfrecuentesComponent {
  preguntas: Pregunta[] = [
    {
      pregunta: '1.¿Cuál es la hora de check-in y check-out del hotel?',
      respuesta: ' El check-in comienza a las 3:00 PM y el check-out es a las 12:00 PM.',
      mostrarRespuesta: false
    },
    {
      pregunta: '2.¿Se permite fumar en las habitaciones?',
      respuesta: 'No, todas nuestras habitaciones son para no fumadores. Tenemos áreas designadas para fumar fuera del hotel.',
      mostrarRespuesta: false
    },
    {
      pregunta: '3.¿Se admiten mascotas en el hotel?',
      respuesta: 'Lo sentimos, no permitimos mascotas en nuestras instalaciones, a menos que sean perros guía certificados.',
      mostrarRespuesta: false
    },
    {
      pregunta: '4.¿Tienen servicio de transporte desde y hacia el aeropuerto?',
      respuesta: 'Sí, ofrecemos servicio de transporte gratuito desde y hacia el aeropuerto para nuestros huéspedes. Simplemente avísanos con antelación sobre los detalles de tu vuelo.',
      mostrarRespuesta: false
    },
    {
      pregunta: '5.¿Hay acceso a internet en las habitaciones?',
      respuesta: 'Sí, todas nuestras habitaciones cuentan con acceso a internet Wi-Fi de alta velocidad de forma gratuita.',
      mostrarRespuesta: false
    },
    {
      pregunta: '6.¿Se ofrecen servicios de lavandería?',
      respuesta: 'Sí, tenemos servicios de lavandería disponibles para los huéspedes. Puedes solicitar el servicio de lavandería en la recepción.',
      mostrarRespuesta: false
    },
    {
      pregunta: '7.¿Cuáles son las opciones de desayuno disponibles?',
      respuesta: 'Ofrecemos un desayuno buffet completo todas las mañanas, con una variedad de opciones calientes y frías, incluyendo frutas frescas, panes, cereales y opciones de desayuno caliente.',
      mostrarRespuesta: false
    },
    {
      pregunta: '8.¿Tienen instalaciones de fitness en el hotel?',
      respuesta: 'Sí, contamos con un gimnasio completamente equipado que está abierto las 24 horas para nuestros huéspedes.',
      mostrarRespuesta: false
    },
    {
      pregunta: '9.¿Se puede solicitar servicio de habitaciones?',
      respuesta: 'Sí, ofrecemos servicio de habitaciones las 24 horas. Puedes pedir comida o bebidas directamente a tu habitación.',
      mostrarRespuesta: false 
    },
    {
      pregunta: '10.¿Tienen estacionamiento disponible?',
      respuesta: 'Sí, tenemos un estacionamiento gratuito para nuestros huéspedes. Solo necesitas registrarte en la recepción para obtener un pase de estacionamiento.',
      mostrarRespuesta: false 
    }
  ];

  toggleRespuesta(pregunta: Pregunta) {
    pregunta.mostrarRespuesta = !pregunta.mostrarRespuesta;
  }
}
