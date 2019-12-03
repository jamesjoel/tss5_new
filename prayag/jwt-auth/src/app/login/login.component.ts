import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User={
    email: "",
    password: ""
  }

  errorMsg:string;
  
  constructor( private _router : Router,  private _auth: AuthService ) { }

  ngOnInit() {
  }

  login(){
    this._auth.doLogin(this.user).subscribe(data =>{
      // console.log(data);
      localStorage.setItem("myToken",data.token);
      this._router.navigate(["/user"]);
    },
      err =>{
        // console.log(err);
        this.errorMsg=err.error.msg;
      });
  }

}
