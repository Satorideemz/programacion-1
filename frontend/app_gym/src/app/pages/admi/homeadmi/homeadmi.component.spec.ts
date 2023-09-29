import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdmiComponent } from './homeadmi.component';

describe('HomeAdmiComponent', () => {
  let component: HomeAdmiComponent;
  let fixture: ComponentFixture<HomeAdmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdmiComponent]
    });
    fixture = TestBed.createComponent(HomeAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
