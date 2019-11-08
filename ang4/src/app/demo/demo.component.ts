import { Component, OnInit } from '@angular/core';

interface student{
  name:string,
  age:number
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  newStudent:student={
    name:"",
    age:null
  };
  sendStudent:student;



  name:string="rohit";


  constructor() { }

  ngOnInit() {
  }
  add(){
    this.sendStudent=this.newStudent;
  }

}
