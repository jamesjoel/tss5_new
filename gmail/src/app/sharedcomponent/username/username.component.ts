import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  @Output() goUser = new EventEmitter();

  user={
    username : "",
    password : ""
  }
  constructor() { }

  ngOnInit() {
  }
  next(){
    this.goUser.emit(this.user);
  }

}
