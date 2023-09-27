import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosAlumnosProfesorComponent } from './nuevos-alumnos-profesor.component';

describe('NuevosAlumnosProfesorComponent', () => {
  let component: NuevosAlumnosProfesorComponent;
  let fixture: ComponentFixture<NuevosAlumnosProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosAlumnosProfesorComponent]
    });
    fixture = TestBed.createComponent(NuevosAlumnosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
