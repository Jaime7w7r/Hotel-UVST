import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('inicio');
  }
  vermas:boolean = false;

  ver(){
    this.vermas=true;
  }

  nover(){
    this.vermas=false;
  }
}
