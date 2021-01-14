import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponent } from './my-new.component';

describe('MyNewComponent', () => {
  let component: MyNewComponent;
  let fixture: ComponentFixture<MyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
