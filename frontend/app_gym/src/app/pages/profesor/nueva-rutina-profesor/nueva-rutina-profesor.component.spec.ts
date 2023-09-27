import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRutinaProfesorComponent } from './nueva-rutina-profesor.component';

describe('NuevaRutinaProfesorComponent', () => {
  let component: NuevaRutinaProfesorComponent;
  let fixture: ComponentFixture<NuevaRutinaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaRutinaProfesorComponent]
    });
    fixture = TestBed.createComponent(NuevaRutinaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
