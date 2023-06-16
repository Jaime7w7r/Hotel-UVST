import { TestBed } from '@angular/core/testing';
import { AccesibilidadComponent } from './accesibilidad.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AccesibilidadComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccesibilidadComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'accesibilidad'`, () => {
    const fixture = TestBed.createComponent(AccesibilidadComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('accesibilidad');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AccesibilidadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('accesibilidad app is running!');
  });
});
