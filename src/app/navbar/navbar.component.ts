import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public valor: string | undefined;

  constructor(private pagina: PaginaService) {
    this.pagina.valor$.subscribe(valor => {
      this.valor = valor;
    });
  }
}
