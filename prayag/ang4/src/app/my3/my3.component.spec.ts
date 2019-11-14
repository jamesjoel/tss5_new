import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { My3Component } from './my3.component';

describe('My3Component', () => {
  let component: My3Component;
  let fixture: ComponentFixture<My3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
