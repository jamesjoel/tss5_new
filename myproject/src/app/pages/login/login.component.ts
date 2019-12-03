import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : User = {
    email : "",
    password : ""
  }
  errorMsg:string;
  constructor(
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  login(){
    console.log(this.user);
    this._authService.doLogin(this.user).subscribe(result=>{
      
      localStorage.setItem("token", result.token);
      this._router.navigate(["/user"]);
    },
    err=>{
      // console.log(err);
      this.errorMsg = err.error.msg;
    })
  }

}
