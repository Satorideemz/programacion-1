import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRutinaProfesorComponent } from './editar-rutina-profesor.component';

describe('EditarRutinaProfesorComponent', () => {
  let component: EditarRutinaProfesorComponent;
  let fixture: ComponentFixture<EditarRutinaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRutinaProfesorComponent]
    });
    fixture = TestBed.createComponent(EditarRutinaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
