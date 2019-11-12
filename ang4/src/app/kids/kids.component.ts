import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  @Output() goToParent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  demo(){
    this.goToParent.emit("rohit");
  }

}
