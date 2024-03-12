import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFromToComponent } from './date-from-to.component';

describe('DateFromToComponent', () => {
  let component: DateFromToComponent;
  let fixture: ComponentFixture<DateFromToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateFromToComponent]
    });
    fixture = TestBed.createComponent(DateFromToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
