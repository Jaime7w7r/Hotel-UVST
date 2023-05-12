import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('contacto');
  }

}
