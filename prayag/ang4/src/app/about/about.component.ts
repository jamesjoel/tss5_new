import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  name:string="Rohit"
  a;
  msg:string="this is About Page Message."

  constructor() { }

  ngOnInit() {
  }
  demo(){
    this.name=this.a;
  }

}
