import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionhomeComponent } from './navegacionhome.component';

describe('NavegacionhomeComponent', () => {
  let component: NavegacionhomeComponent;
  let fixture: ComponentFixture<NavegacionhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacionhomeComponent]
    });
    fixture = TestBed.createComponent(NavegacionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
