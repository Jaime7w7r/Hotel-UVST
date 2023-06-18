import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  private valorSubject = new Subject<string>();
  private tipoUsuarioSubject = new Subject<string>();
  private nombreSubject = new Subject<string>();
  private idSubject = new Subject<string>();

  public valor$ = this.valorSubject.asObservable();
  public tipoUsuario$ = this.tipoUsuarioSubject.asObservable();
  public nombre$ = this.nombreSubject.asObservable();
  public id$ = this.idSubject.asObservable();

  public setValor(nuevoValor: string) {
    this.valorSubject.next(nuevoValor);
  }

  public setTipoUsuario(nuevoTipoUsuario: string) {
    this.tipoUsuarioSubject.next(nuevoTipoUsuario);
  }

  public setNombre(nuevoNombre: string) {
    this.nombreSubject.next(nuevoNombre);
  }

  public setId(nuevoId: string) {
    this.idSubject.next(nuevoId);
  }
}
