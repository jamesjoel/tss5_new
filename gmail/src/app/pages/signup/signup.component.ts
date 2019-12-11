import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


 @Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMsg="";
  user={
    fullname : "",
    username : "",
    password : ""
  }
  constructor(private _user: UserService, private _router : Router) { }

  ngOnInit() {
  }
   signup(x, y: HTMLInputElement){
    this._user.signup(this.user).subscribe(data=>{
      console.log(data);
      if(x=='btn'){

        this._router.navigate(["/"]);
      }
      if(x=='txt'){
        this.errorMsg = ""; 
      }
      
    },
    err=>{
      this.errorMsg=err.error.msg;
      if(x=="btn"){
        // console.log(y);
        y.focus();
      }
    })
  }


}
