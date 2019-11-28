import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email : "",
    password : ""
  }
  errorMsg:string;

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._auth.doLogin(this.user).subscribe(data=>{
      console.log(data);
      localStorage.setItem("mytoken", data.token);
      this._router.navigate(["/user"]);
    },
    err =>{

      // console.log(err);
      this.errorMsg=err.error.msg;
    });
  }
}
