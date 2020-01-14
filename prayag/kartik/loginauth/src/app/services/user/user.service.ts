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

  url:string="http://localhost:3000/api/user/";

  addUser(user:User){
      return this._http.post<any>(this.url+"signup",user);
  }
  
  getUser(){
    console.log("calling user");
    return this._http.get<any>(this.url+"getuser",{
        headers:{Authorization:this._auth.getToken()}
    });
  }

}
