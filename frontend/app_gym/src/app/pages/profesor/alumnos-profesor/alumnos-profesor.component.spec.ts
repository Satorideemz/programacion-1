import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosProfesorComponent } from './alumnos-profesor.component';

describe('AlumnosProfesorComponent', () => {
  let component: AlumnosProfesorComponent;
  let fixture: ComponentFixture<AlumnosProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosProfesorComponent]
    });
    fixture = TestBed.createComponent(AlumnosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
