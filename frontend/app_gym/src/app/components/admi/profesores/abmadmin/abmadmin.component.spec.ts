import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmadminComponent } from './abmadmin.component';

describe('AbmadminComponent', () => {
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
