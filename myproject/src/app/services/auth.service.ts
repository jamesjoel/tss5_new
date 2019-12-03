import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }


  doLogin(user:User){
    return this._http.post<any>("http://localhost:3000/api/user/auth", user);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  isLoggedIn(){
    if(localStorage.getItem("token"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
