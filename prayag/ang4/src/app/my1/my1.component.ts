import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { My2Component } from '../my2/my2.component';
@Component({
  selector: 'app-my1',
  // templateUrl: './my1.component.html',
  template : `<h1>this is parent</h1>
    <app-my2></app-my2>`,
  styleUrls: ['./my1.component.scss']
})
export class My1Component implements OnInit, AfterViewInit {

  @ViewChild(My2Component, { static : false}) mydata; 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.mydata);
  }
}
