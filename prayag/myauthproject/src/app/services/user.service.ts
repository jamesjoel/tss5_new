import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient,
    private _auth:AuthService
  ) { }

  getUser(){
    console.log("calling");
    return this._http.get<any>("http://localhost:3000/api/user/getuser",{
      headers: {Authorization : this._auth.getToken()}
    });
  }
}
