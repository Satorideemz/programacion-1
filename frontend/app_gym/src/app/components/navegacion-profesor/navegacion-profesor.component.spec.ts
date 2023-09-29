import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionProfesorComponent } from './navegacion-profesor.component';

describe('NavegacionProfesorComponent', () => {
  let component: NavegacionProfesorComponent;
  let fixture: ComponentFixture<NavegacionProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacionProfesorComponent]
    });
    fixture = TestBed.createComponent(NavegacionProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
