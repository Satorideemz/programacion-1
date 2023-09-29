import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesProfesorComponent } from './clases-profesor.component';

describe('ClasesProfesorComponent', () => {
  let component: ClasesProfesorComponent;
  let fixture: ComponentFixture<ClasesProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasesProfesorComponent]
    });
    fixture = TestBed.createComponent(ClasesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});