import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router:Router,
    private _http:HttpClient
  ) { }

    url:string="http://localhost:3000/api/user/auth"

  doLogin(user:User){
    return this._http.post<any>(this.url,user)
  }

  isLoggedIn(){
    if(localStorage.getItem("token"))
    {
      return true;
    }else
    {
      return false;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/login"])
  }

  getToken(){
    return localStorage.getItem("token");
  }

}
