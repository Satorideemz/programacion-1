import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosAlumnosAdmiComponent } from './nuevos-alumnos-admi.component';

describe('NuevosAlumnosAdmiComponent', () => {
  let component: NuevosAlumnosAdmiComponent;
  let fixture: ComponentFixture<NuevosAlumnosAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosAlumnosAdmiComponent]
    });
    fixture = TestBed.createComponent(NuevosAlumnosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
