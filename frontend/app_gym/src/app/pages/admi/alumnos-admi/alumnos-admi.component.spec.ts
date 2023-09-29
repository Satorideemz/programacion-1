import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAdmiComponent } from './alumnos-admi.component';

describe('AlumnosAdmiComponent', () => {
  let component: AlumnosAdmiComponent;
  let fixture: ComponentFixture<AlumnosAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosAdmiComponent]
    });
    fixture = TestBed.createComponent(AlumnosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
