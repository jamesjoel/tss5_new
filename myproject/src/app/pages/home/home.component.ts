import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = [
    {
      name : "rohit",
      age : 25,
      city :"indore",
      salary : 5000,
      gender : "male",
      country : "india"
    },
    {
      name : "james",
      age : 24,
      city : "bhopal",
      salary : 2900,
      gender : "male",
      country: "britain"
    },
    {
      name : "nisha",
      age : 30,
      city : "mumbai",
      salary : 3400,
      gender : "female",
      country : "US"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
