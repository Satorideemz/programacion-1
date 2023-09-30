import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlumnoAdmiComponent } from './perfil-alumno-admi.component';

describe('PerfilAlumnoAdmiComponent', () => {
  let component: PerfilAlumnoAdmiComponent;
  let fixture: ComponentFixture<PerfilAlumnoAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilAlumnoAdmiComponent]
    });
    fixture = TestBed.createComponent(PerfilAlumnoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
