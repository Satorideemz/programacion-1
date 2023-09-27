import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlumnoProfesorComponent } from './buscar-alumno-profesor.component';

describe('BuscarAlumnoProfesorComponent', () => {
  let component: BuscarAlumnoProfesorComponent;
  let fixture: ComponentFixture<BuscarAlumnoProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarAlumnoProfesorComponent]
    });
    fixture = TestBed.createComponent(BuscarAlumnoProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
