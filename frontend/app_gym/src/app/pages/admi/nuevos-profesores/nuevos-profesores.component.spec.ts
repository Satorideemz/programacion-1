import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosProfesoresComponent } from './nuevos-profesores.component';

describe('NuevosProfesoresComponent', () => {
  let component: NuevosProfesoresComponent;
  let fixture: ComponentFixture<NuevosProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosProfesoresComponent]
    });
    fixture = TestBed.createComponent(NuevosProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
