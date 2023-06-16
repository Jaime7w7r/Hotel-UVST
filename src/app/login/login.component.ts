import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('login');
  }

}
