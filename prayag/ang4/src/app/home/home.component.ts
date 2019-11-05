import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "rohit";
  arr=[
    {
      name: "rohit",
      age: 24,
      city: "Indore"
    },
    {
      name: "virat",
      age: 29,
      city: "Mumbai"
    },
    {
      name: "hardik",
      age: 20,
      city: "gujrat"
    },
    {
      name: "ravindra",
      age: 34,
      city: "varansi"
    },
    {
      name: "rahul",
      age: 30,
      city: "delhi"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
