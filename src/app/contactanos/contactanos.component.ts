import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('contactanos');
  }
}
