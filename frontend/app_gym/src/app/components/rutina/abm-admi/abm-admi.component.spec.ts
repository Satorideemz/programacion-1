import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAdmiComponent } from './abm-admi.component';

describe('AbmAdmiComponent', () => {
  let component: AbmAdmiComponent;
  let fixture: ComponentFixture<AbmAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmAdmiComponent]
    });
    fixture = TestBed.createComponent(AbmAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
