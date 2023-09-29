import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlumnoAdmiComponent } from './buscar-alumno-admi.component';

describe('BuscarAlumnoAdmiComponent', () => {
  let component: BuscarAlumnoAdmiComponent;
  let fixture: ComponentFixture<BuscarAlumnoAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarAlumnoAdmiComponent]
    });
    fixture = TestBed.createComponent(BuscarAlumnoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
