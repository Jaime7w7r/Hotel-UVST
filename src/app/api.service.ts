import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://fire-base-con.vercel.app/';

  constructor(private http: HttpClient) { }

  obtenerDatos(ruta: string) {
    return this.http.get<any[]>(`${this.apiUrl}${ruta}`);
  }

  DelUser(id: string) {
    const url = `${this.apiUrl}${id}`; // Agrega el ID en la URL
    console.log(url);
    return this.http.delete<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar el usuario', error);
        throw error; // Re-lanzar el error para que pueda ser manejado en el componente
      })
    );
  }

}


