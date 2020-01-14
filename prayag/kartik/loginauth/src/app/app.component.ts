import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { User } from './Models/user.interface';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'loginauth';


  userInfo:User={
    name:"",
    email:""
  }

  constructor(
    private _auth:AuthService,
    private _user:UserService
  ){}

  ngOnInit() {
    if(this._auth.isLoggedIn()){
      this._user.getUser().subscribe(data=>{
        // console.log(data);
        this.userInfo=data;
        console.log(this.userInfo.name)
      });
    }
  }
  
  
}
