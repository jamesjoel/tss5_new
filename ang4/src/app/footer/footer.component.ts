import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // h:number=12;
  h:any={
    "font-size":"20px",
    "color":"green",
    "background-color":"blue"
  };
  str:string="Footer";
  constructor() { }

  ngOnInit() {
  }

}
