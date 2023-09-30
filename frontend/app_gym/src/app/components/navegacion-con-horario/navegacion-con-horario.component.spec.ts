import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionConHorarioComponent } from './navegacion-con-horario.component';

describe('NavegacionConHorarioComponent', () => {
  let component: NavegacionConHorarioComponent;
  let fixture: ComponentFixture<NavegacionConHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacionConHorarioComponent]
    });
    fixture = TestBed.createComponent(NavegacionConHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
