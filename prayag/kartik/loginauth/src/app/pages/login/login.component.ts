import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User={
    email:"",
    password:null
  }
  errorMsg:string;
  constructor(
    private _router:Router,
    private _auth:AuthService
  ) { }

  ngOnInit() {
  }

  login(){
    this._auth.doLogin(this.user).subscribe(data =>{
      // console.log(data);
      if(data){
        localStorage.setItem("token",data.token);
        this.errorMsg="";  
        this._router.navigate(["/user"]);
      }
    },
    err=>{
      // console.log(err)
      this.errorMsg=err.error.msg;
    });
  }

}
