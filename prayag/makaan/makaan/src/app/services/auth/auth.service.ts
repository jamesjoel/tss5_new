import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient,
    private _router:Router
  ) { }

  url:"http://localhost:3000/api/user/";

  doLogin(user:User){
    return this._http.post<any>(this.url+"login",user)
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

  logout(){
    localStorage.removeItem("token");
    return this._router.navigate(["/login"])
  }

  getToken(){
    return localStorage.getItem("token");
  }


}
