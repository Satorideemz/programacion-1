import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaABMProfesorComponent } from './rutina-abm-profesor.component';

describe('RutinaABMProfesorComponent', () => {
  let component: RutinaABMProfesorComponent;
  let fixture: ComponentFixture<RutinaABMProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaABMProfesorComponent]
    });
    fixture = TestBed.createComponent(RutinaABMProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
