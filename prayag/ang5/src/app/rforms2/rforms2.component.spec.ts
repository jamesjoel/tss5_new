import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rforms2Component } from './rforms2.component';

describe('Rforms2Component', () => {
  let component: Rforms2Component;
  let fixture: ComponentFixture<Rforms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rforms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rforms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
