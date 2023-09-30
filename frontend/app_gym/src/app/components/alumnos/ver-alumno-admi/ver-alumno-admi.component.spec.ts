import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlumnoAdmiComponent } from './ver-alumno-admi.component';

describe('VerAlumnoAdmiComponent', () => {
  let component: VerAlumnoAdmiComponent;
  let fixture: ComponentFixture<VerAlumnoAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerAlumnoAdmiComponent]
    });
    fixture = TestBed.createComponent(VerAlumnoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
