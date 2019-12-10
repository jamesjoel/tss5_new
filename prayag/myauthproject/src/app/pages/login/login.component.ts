import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user:User={
    email:"",
    password:""
  }
  errorMsg:string;
  constructor(
    private _auth:AuthService,
    private _router:Router
    ) { }

  ngOnInit() {
  }

  login(){
    this._auth.doLogin(this.user).subscribe(result =>{
      localStorage.setItem("token",result.token);
      this._router.navigate(["/user"]);
    },
    err =>{
      this.errorMsg=err.error.msg;
    });
  }

}
