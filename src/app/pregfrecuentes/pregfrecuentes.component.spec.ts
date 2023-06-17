import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregfrecuentesComponent } from './pregfrecuentes.component';

describe('PregfrecuentesComponent', () => {
  let component: PregfrecuentesComponent;
  let fixture: ComponentFixture<PregfrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregfrecuentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
