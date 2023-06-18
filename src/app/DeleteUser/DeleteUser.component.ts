import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-DeleteUser',
  templateUrl: './DeleteUser.component.html',
  styleUrls: ['./DeleteUser.component.css']
})
export class DeleteUserComponent implements OnInit {
  datos: any[] | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.obtenerDatos("getUser").subscribe(
      (response) => {
        this.datos = response;
        this.procesarDatos();
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }

  procesarDatos() {
    console.log(this.datos);
  }

  DelUser(id: string) {
    this.apiService.DelUser(id).subscribe(
      (response) => {
        console.log(response);
        // Realizar cualquier otra acción después de eliminar el usuario
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }
}
