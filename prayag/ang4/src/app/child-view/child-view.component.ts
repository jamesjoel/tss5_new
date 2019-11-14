import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildViewBoxComponent } from '../child-view-box/child-view-box.component';

@Component({
  selector: 'app-child-view',
  // templateUrl: './child-view.component.html',
  template : `<h1>{{ newName }}</h1>`,
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements AfterViewInit, OnInit {

  @ViewChild(ChildViewBoxComponent, { static : false}) mydata;

  demo:string="rohit";
  demo2:{
    name: "",
    age: null,
    city: ""
  };
  newName:string="rohit";

  ngAfterViewInit(){
    console.log(this.mydata.name);
    //this.demo=this.childData.myStr;
    //this.demo2=this.childData.obj;
  }

  // constructor() { }

  ngOnInit() {
  }

}
