import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:User={
    name:"",
    email:"",
    contact:"",
    password:null
  }

  errorMsg:string;

  constructor(
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
  }

  signup(){
    this._user.addUser(this.user).subscribe(data=>{
      if(data){
        this._router.navigate(["/login"]);
      }
    },
    err=>{
      this.errorMsg=err.error.msg
    });
  }

}
