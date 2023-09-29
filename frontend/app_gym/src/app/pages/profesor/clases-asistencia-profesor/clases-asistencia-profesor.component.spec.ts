import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesAsistenciaProfesorComponent } from './clases-asistencia-profesor.component';

describe('ClasesAsistenciaProfesorComponent', () => {
  let component: ClasesAsistenciaProfesorComponent;
  let fixture: ComponentFixture<ClasesAsistenciaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasesAsistenciaProfesorComponent]
    });
    fixture = TestBed.createComponent(ClasesAsistenciaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});