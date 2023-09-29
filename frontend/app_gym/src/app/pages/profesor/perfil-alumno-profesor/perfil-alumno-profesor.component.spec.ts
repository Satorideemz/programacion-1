import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlumnoProfesorComponent } from './perfil-alumno-profesor.component';

describe('PerfilAlumnoProfesorComponent', () => {
  let component: PerfilAlumnoProfesorComponent;
  let fixture: ComponentFixture<PerfilAlumnoProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilAlumnoProfesorComponent]
    });
    fixture = TestBed.createComponent(PerfilAlumnoProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
