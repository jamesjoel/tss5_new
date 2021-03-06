import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  doLogin(user){
    return this._http.post<any>("http://localhost:3000/api/user/auth", user);
  }
}
