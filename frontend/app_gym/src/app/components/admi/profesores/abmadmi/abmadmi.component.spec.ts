import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmadmiComponent } from './abmadmi.component';

describe('AbmadmiComponent', () => {
  let component: AbmadmiComponent;
  let fixture: ComponentFixture<AbmadmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmadmiComponent]
    });
    fixture = TestBed.createComponent(AbmadmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
