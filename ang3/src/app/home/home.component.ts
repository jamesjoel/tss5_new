import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data=[
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


  constructor() { }

  ngOnInit() {
  }

}
