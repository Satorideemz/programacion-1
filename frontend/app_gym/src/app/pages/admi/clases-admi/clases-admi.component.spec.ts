import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesAdmiComponent } from './clases-admi.component';

describe('ClasesAdmiComponent', () => {
  let component: ClasesAdmiComponent;
  let fixture: ComponentFixture<ClasesAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasesAdmiComponent]
    });
    fixture = TestBed.createComponent(ClasesAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});