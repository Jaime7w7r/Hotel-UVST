import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('graficos');
  }

}
