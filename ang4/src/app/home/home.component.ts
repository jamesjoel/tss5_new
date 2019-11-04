import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "rohit";
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

}
