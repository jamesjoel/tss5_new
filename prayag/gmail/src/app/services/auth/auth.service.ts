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

doLogin(user:User){
  return this._http.post<any>("http://localhost:3000/api/user/auth",user)
}

}
