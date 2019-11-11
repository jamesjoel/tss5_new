import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // h:number=25;
  str:string="HEADER";
  h:any={
    "color" : "red",
    "font-size":"25px",
    "background-color":"yellow"
  };

  constructor() { }

  ngOnInit() {
  }

}
