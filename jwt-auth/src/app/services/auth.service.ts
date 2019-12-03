import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient, private _router : Router) { }

  doLogin(user:User){
    return this._http.post<any>("http://localhost:3000/user/auth", user);
  }

  logout(){
    localStorage.removeItem("mytoken");
    this._router.navigate(["/"]);
  }
  getToken(){
    return localStorage.getItem("mytoken");
  }

  isLoggedIn(){
    
    if(localStorage.getItem("mytoken"))
    {
      return true;
    }
    else{
      return false;
    }
  }
  

}
