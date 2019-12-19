import { Component, OnInit } from '@angular/core';

interface myData{
  name : string,
  age : number,
  city : string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {

  data:myData[]=[
    {
      name : "Rohit",
      age : 25,
      city : "indore"
    },
    {
      name: "Jaya",
      age: 20,
      city: "ujjain"
    },
    {
      name: "James",
      age: 27,
      city: "bhopal"
    },
    {
      name: "Nidhi",
      age: 25,
      city: "indore"
    }

  ];

  name:string="rohit";

  constructor() { }

  ngOnInit() {
  }

}
