import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='https://fire-base-con.vercel.app/getResev';


  constructor(private http:HttpClient) { }

  obtenerDatos(){
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

}


