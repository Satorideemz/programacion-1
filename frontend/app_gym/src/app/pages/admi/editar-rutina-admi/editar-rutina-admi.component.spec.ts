import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRutinaAdmiComponent } from './editar-rutina-admi.component';

describe('EditarRutinaAdmiComponent', () => {
  let component: EditarRutinaAdmiComponent;
  let fixture: ComponentFixture<EditarRutinaAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRutinaAdmiComponent]
    });
    fixture = TestBed.createComponent(EditarRutinaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
