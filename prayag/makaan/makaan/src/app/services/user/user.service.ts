import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient
  ) { }

  addUser(user:User){
    return this._http.post<any>("http://localhost:3000/api/user/register",user);
  }

}
