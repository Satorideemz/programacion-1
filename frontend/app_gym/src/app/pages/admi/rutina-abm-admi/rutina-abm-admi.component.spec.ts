import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaAbmAdmiComponent } from './rutina-abm-admi.component';

describe('RutinaAbmAdmiComponent', () => {
  let component: RutinaAbmAdmiComponent;
  let fixture: ComponentFixture<RutinaAbmAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaAbmAdmiComponent]
    });
    fixture = TestBed.createComponent(RutinaAbmAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
