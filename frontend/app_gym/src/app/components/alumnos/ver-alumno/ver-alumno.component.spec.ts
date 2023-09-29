import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlumnoComponent } from './ver-alumno.component';

describe('VerAlumnoComponent', () => {
  let component: VerAlumnoComponent;
  let fixture: ComponentFixture<VerAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerAlumnoComponent]
    });
    fixture = TestBed.createComponent(VerAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
