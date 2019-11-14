import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildViewBoxComponent } from '../child-view-box/child-view-box.component'

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements AfterViewInit {

  @ViewChild(ChildViewBoxComponent, { static : false }) childData;

  demo:any;
  demo2:{
    name: "",
    age: null,
    city: ""
  };

  ngAfterViewInit(){
    this.demo=this.childData.myStr;
    this.demo2=this.childData.obj;
  }

  constructor() { }

  ngOnInit() {
  }

}
