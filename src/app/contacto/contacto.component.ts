import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  componentes: any[] | undefined; // Arreglo para almacenar los datos del LocalStorage

  constructor(private pagina: PaginaService) {
    pagina.setValor('contacto');
  }

  ngOnInit() {
    // Obtener los datos del LocalStorage
    const data = localStorage.getItem('reservaciones');
    this.componentes = data ? JSON.parse(data) : [];
    if (this.componentes && this.componentes.length > 0) {
      console.log(this.componentes[0]);
    }
  }
}
