import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  @Input() userdata;
  @Output() goUser = new EventEmitter();
  user={
    username : "",
    password : ""
  }
  constructor() { } 

  ngOnInit() {
  }
  login(){
    this.user.username=this.userdata.username;
    // console.log(this.user);
    this.goUser.emit(this.user);
  }

}
