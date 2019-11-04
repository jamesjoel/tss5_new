import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.sass']
})
export class NotfoundComponent implements OnInit {
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = false;

  constructor() { }

  ngOnInit() {
  }
  demo(){
    this.isavailable = !this.isavailable;
  }

}
