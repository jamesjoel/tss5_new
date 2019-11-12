import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  name:any;
  constructor() { }

  ngOnInit() {
  }

  demoParent(a){
    console.log("parent compo ------- ",a);
    this.name=a;
  }

}
