import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  myStr="this is Child Variables";
  obj={
    name : "rohit",
    age : 25,
    city : "indore"
  }

  constructor() { }

  ngOnInit() {
  }

}
