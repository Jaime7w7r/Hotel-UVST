import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { YoutubeUrlPipe } from '../youtube-url.pipe';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('inicio');
  }

  videoUrl: string = 'https://youtu.be/nji5zvkuuFg';


  vermas: boolean = false;

  ver() {
    this.vermas = true;
  }

  nover() {
    this.vermas = false;
  }
}
