import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEarningsComponent } from './add-earnings.component';

describe('AddEarningsComponent', () => {
  let component: AddEarningsComponent;
  let fixture: ComponentFixture<AddEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
