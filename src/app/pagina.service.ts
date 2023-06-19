import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  private valorSubject = new BehaviorSubject<string>('');
  private tipoUsuarioSubject = new BehaviorSubject<string>('');
  private nombreSubject = new BehaviorSubject<string>('');
  private idSubject = new BehaviorSubject<string>('');
  private telefonoSubject = new BehaviorSubject<string>('');
  private correoSubject = new BehaviorSubject<string>('');
  private apellidoSubject = new BehaviorSubject<string>('');

  public valor$ = this.valorSubject.asObservable();
  public tipoUsuario$ = this.tipoUsuarioSubject.asObservable();
  public nombre$ = this.nombreSubject.asObservable();
  public id$ = this.idSubject.asObservable();
  public telefono$ = this.telefonoSubject.asObservable();
  public correo$ = this.correoSubject.asObservable();
  public apellido$ = this.apellidoSubject.asObservable();

  public setApellido(nuevoApellido: string) {
    this.apellidoSubject.next(nuevoApellido);
  }

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

  public setTelefono(nuevoTelefono: string) {
    this.telefonoSubject.next(nuevoTelefono);
  }

  public setCorreo(nuevoCorreo: string) {
    this.correoSubject.next(nuevoCorreo);
  }

  public getApellido() {
    return this.apellidoSubject.getValue();
  }

  public getValor() {
    return this.valorSubject.getValue();
  }

  public getTipoUsuario() {
    return this.tipoUsuarioSubject.getValue();
  }

  public getNombre() {
    return this.nombreSubject.getValue();
  }

  public getId() {
    return this.idSubject.getValue();
  }

  public getTelefono() {
    return this.telefonoSubject.getValue();
  }

  public getCorreo() {
    return this.correoSubject.getValue();
  }
}