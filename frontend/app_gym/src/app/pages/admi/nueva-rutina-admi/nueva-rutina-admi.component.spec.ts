import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRutinaAdmiComponent } from './nueva-rutina-admi.component';

describe('NuevaRutinaAdmiComponent', () => {
  let component: NuevaRutinaAdmiComponent;
  let fixture: ComponentFixture<NuevaRutinaAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaRutinaAdmiComponent]
    });
    fixture = TestBed.createComponent(NuevaRutinaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
