import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionAdmiComponent } from './navegacion-admi.component';

describe('NavegacionAdmiComponent', () => {
  let component: NavegacionAdmiComponent;
  let fixture: ComponentFixture<NavegacionAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacionAdmiComponent]
    });
    fixture = TestBed.createComponent(NavegacionAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});