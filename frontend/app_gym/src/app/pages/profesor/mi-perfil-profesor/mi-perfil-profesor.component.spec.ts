import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilProfesorComponent } from './mi-perfil-profesor.component';

describe('MiPerfilProfesorComponent', () => {
  let component: MiPerfilProfesorComponent;
  let fixture: ComponentFixture<MiPerfilProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPerfilProfesorComponent]
    });
    fixture = TestBed.createComponent(MiPerfilProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
