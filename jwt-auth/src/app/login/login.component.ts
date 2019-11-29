import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg:string;
  user : User = {
    username : "",
    password : ""
  }

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._auth.doLogin(this.user).subscribe(data=>{
      // console.log(data);
      localStorage.setItem("mytoken", data.token);
      this._router.navigate(["/user"]);
    },
    err=>{
      this.errorMsg = err.error.msg;
    });
  }
}
