import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDemoComponent } from './mini-demo.component';

describe('MiniDemoComponent', () => {
  let component: MiniDemoComponent;
  let fixture: ComponentFixture<MiniDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
