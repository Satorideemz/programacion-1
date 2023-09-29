import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilAdmiComponent } from './mi-perfil-admi.component';

describe('MiPerfilAdmiComponent', () => {
  let component: MiPerfilAdmiComponent;
  let fixture: ComponentFixture<MiPerfilAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPerfilAdmiComponent]
    });
    fixture = TestBed.createComponent(MiPerfilAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
