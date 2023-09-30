import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionSinContactanosComponent } from './navegacion-sin-contactanos.component';

describe('NavegacionSinContactanosComponent', () => {
  let component: NavegacionSinContactanosComponent;
  let fixture: ComponentFixture<NavegacionSinContactanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacionSinContactanosComponent]
    });
    fixture = TestBed.createComponent(NavegacionSinContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
