import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofesorComponent } from './homeprofesor.component';

describe('HomeprofesorComponent', () => {
  let component: HomeprofesorComponent;
  let fixture: ComponentFixture<HomeprofesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeprofesorComponent]
    });
    fixture = TestBed.createComponent(HomeprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
