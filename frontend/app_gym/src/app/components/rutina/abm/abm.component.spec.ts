import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmComponent as AbmadminComponent } from './abm.component';

describe('AbmComponent', () => {
  let component: AbmadminComponent;
  let fixture: ComponentFixture<AbmadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmadminComponent]
    });
    fixture = TestBed.createComponent(AbmadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
