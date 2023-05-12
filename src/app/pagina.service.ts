import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  private valorSubject = new Subject<string>();
  public valor$ = this.valorSubject.asObservable();

  public setValor(nuevoValor: string) {
    this.valorSubject.next(nuevoValor);
  }
}
