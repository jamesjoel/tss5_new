import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { My1Component } from './my1.component';

describe('My1Component', () => {
  let component: My1Component;
  let fixture: ComponentFixture<My1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
