import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-box',
  templateUrl: './child-view-box.component.html',
  styleUrls: ['./child-view-box.component.scss']
})
export class ChildViewBoxComponent implements OnInit {



  myStr="This is Child Variable.";
  // obj={
  //   name:"rohit",
  //   age:22,
  //   city:"indore"
  // }
  constructor() { }

  ngOnInit() {
  }

}
