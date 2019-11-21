import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelstudentComponent } from './delstudent.component';

describe('DelstudentComponent', () => {
  let component: DelstudentComponent;
  let fixture: ComponentFixture<DelstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
