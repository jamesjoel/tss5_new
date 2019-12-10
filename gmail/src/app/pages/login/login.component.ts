import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernamecheck=false;
  errorMsg="";
  userdata:any;
  constructor(private _auth : AuthService) { }

  ngOnInit() {
  }
  login(user){
    this._auth.doLogin(user).subscribe(data=>{
       
      if(data){
        // console.log(data);
        this.userdata=data;
        this.usernamecheck=true;
        this.errorMsg="";
      }
    },
    err=>{
      console.log(err.error);
      this.errorMsg=err.error.msg;
    })  
  }
  checkPassword(user){
    this._auth.doLogin(user).subscribe(data=>{
      console.log(data);
    },
    err=>{
      console.log(err.error);
      this.errorMsg=err.error.msg;
    })
  }

}
