import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaAbmAdminComponent } from './rutina-abm-admin.component';

describe('RutinaAbmAdminComponent', () => {
  let component: RutinaAbmAdminComponent;
  let fixture: ComponentFixture<RutinaAbmAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaAbmAdminComponent]
    });
    fixture = TestBed.createComponent(RutinaAbmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
