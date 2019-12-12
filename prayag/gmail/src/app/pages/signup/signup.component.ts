import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.interface';
import { UserService } from 'src/app/services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMsg:string="";
  user:User={
    name:"",
    email:"",
    contact:"",
    password:null
  }
  constructor(
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
  }
  signup(x,y:HTMLInputElement){
    this._user.addUser(this.user).subscribe(result => {
      console.log(result)
      if(x=='btn')
      {
        this._router.navigate(["/login"]);
      }
      if(x=='txt')
      {
        this.errorMsg="";
      }

    },
    err=>{
      this.errorMsg=err.error.msg;
      if(x=='btn')
      {
        // console.log(y)
        y.focus();
      }
    });

  }

  // signup(x,y:HTMLInputElement){
  //   if(x=='btn')
  //   {
  //     this._user.addUser(this.user).subscribe(result =>{
  //       this._router.navigate(["/login"]);
  //     },
  //     err =>{
  //       this.errorMsg=err.error.msg;
  //       if(x=='btn')
  //       {
  //         y.focus();
  //       }
  //     });
  //   }
  //   if(x=='txt')
  //   {
  //     this._user.addUser(this.user).subscribe(result =>{

  //     },
  //     err =>{
  //       this.errorMsg=err.error.msg;
  //       if(x=='btn')
  //       {
  //         y.focus();
  //       }
  //     });
  //   }
  // }

}
