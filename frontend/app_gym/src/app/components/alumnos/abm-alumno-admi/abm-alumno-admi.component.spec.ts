import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAlumnoAdmiComponent } from './abm-alumno-admi.component';

describe('AbmAlumnoAdmiComponent', () => {
  let component: AbmAlumnoAdmiComponent;
  let fixture: ComponentFixture<AbmAlumnoAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmAlumnoAdmiComponent]
    });
    fixture = TestBed.createComponent(AbmAlumnoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
