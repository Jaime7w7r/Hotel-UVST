import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showAlert(): void {
    Swal.fire({
      title: 'Proyecto realizado por:\nLeonardo Javier Hernandez Martinez ID:245439\nAlfredo Quezada Márquez ID:274258\nBárbara Jimena Silva Jaime ID:244923\nJaime Adolfo Varela Martínez ID:295482\n Como un proyecto escolar.',
      width: 800,
      padding: '3em',
      color: '#BF0404',
      background: 'rgba(0, 0, 0, 0.8',
      backdrop: `
        rgba(240,240,240,0.4)
      `
    })
  }
}
