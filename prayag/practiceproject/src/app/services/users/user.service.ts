import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user.interface';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient,
    private _auth:AuthService
  ) { }

  addUser(user:User){
    return this._http.post<any>("http://localhost:3000/api/user",user);
  }

  getUser(){
    console.log("calliiing....");
    return this._http.get<any>("http://localhost:3000/api/user",{
      headers:{Authorization:this._auth.getToken()}
    });
  }
}
