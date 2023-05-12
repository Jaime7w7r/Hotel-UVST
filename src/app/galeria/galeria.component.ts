import { Component} from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('galeria');
  }
}
