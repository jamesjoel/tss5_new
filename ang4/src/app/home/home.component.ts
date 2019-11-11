import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  msg:string="This is Home Message.....";
  name = "rohit";
  check=true;
  check2=true;
  firstName="Akhilesh";


  arr = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name: "rohit",
      age: 25,
      city: "indore"
    },
    {
      name: "rohit",
      age: 25,
      city: "indore"
    },
    {
      name: "rohit",
      age: 25,
      city: "indore"
    },
    {
      name: "rohit",
      age: 25,
      city: "indore"
    },
    {
      name: "rohit",
      age: 25,
      city: "indore"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  demo(){
    // this.check=false;
    this.check = !this.check;
  }
  demo2(){
    this.check2=!this.check2;
  }

}
