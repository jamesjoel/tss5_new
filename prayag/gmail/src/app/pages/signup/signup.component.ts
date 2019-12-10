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
  signup(){
    this._user.addUser(this.user).subscribe(result => {
      console.log(result)
      
        this._router.navigate(["/login"]);

    });

  }

}
