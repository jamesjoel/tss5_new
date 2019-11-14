import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewBoxComponent } from './child-view-box.component';

describe('ChildViewBoxComponent', () => {
  let component: ChildViewBoxComponent;
  let fixture: ComponentFixture<ChildViewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
