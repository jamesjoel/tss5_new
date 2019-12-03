import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http : HttpClient, private _router:Router ) { }

  doLogin(user){
    return this._http.post<any>("http://localhost:3000/user/auth",user);
  }

  logout(){
    localStorage.removeItem("mytoken");
    this._router.navigate(["/"]);
  }

  isLoggedIn(){
    console.log("sdsdffhhffhgag");
    if(localStorage.getItem("mytoken"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getUserInfo(user:User){
    return this._http.get<User>("http://localhost:3000/api/user"+user._id);
  }


}
