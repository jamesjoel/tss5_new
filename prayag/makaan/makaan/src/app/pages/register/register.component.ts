import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _actRoute:ActivatedRoute,
    private _route:Router,
    private _user:UserService
  ) { }
  user:User={
    email:"",
    password:"",
    name:"",
    contact:null
  }
  buyerId:any;
  msg:string;

  ngOnInit() {
    this._actRoute.paramMap.subscribe(data=>{
      console.log(data.params);
      this.buyerId=data.params;
    });
  }

  signup(){
    this.user.type=this.buyerId.id;
    this._user.addUser(this.user).subscribe(data=>{
      console.log(data);
      this.msg=data.msg;  
      if(data){
        this._route.navigate(["/login"]);
      }
    });
  }

}
