import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('galeria');
  }

  background: ThemePalette = 'primary';
}
