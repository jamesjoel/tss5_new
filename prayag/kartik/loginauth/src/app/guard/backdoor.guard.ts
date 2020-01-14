import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
 constructor(
   private _auth:AuthService,
   private _router:Router
 ){}
 
  canActivate():boolean{
    if(this._auth.isLoggedIn()==true)
    {
      return true;
    }else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
