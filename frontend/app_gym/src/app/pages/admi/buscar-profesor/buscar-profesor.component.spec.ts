import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProfesorComponent } from './buscar-profesor.component';

describe('BuscarProfesorComponent', () => {
  let component: BuscarProfesorComponent;
  let fixture: ComponentFixture<BuscarProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarProfesorComponent]
    });
    fixture = TestBed.createComponent(BuscarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
