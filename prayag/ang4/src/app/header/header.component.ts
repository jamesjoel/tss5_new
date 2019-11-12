import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  // h:number=45;
  h:any={
    "color": "yellow",
    "font-size": "45px",
    "background-color": "green"
  }

  constructor() { }

  ngOnInit() {
  }

}
