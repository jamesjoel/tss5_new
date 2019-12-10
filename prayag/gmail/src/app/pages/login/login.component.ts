import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
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

  next(){
    this._auth.doLogin(this.user).subscribe(result => {
      console.log(result) 
      
    },
    err =>{
      this.errorMsg=err.error.msg;
    });
  }
}
