import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router : Router){}

  canActivate():boolean{
    console.log("sdfgsdfgsdfgs");
    // this._router.navigate(["/"]);
    return true;
  }
  
}
