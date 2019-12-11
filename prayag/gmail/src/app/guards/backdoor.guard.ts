import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  
  constructor(
    private _router:Router,
    private _auth:AuthService
  ){}
  canActivate():boolean{
    if(this._auth.isLoggedIn()==true)
    {
      return true;
    }
    else
    {
      this._router.navigate(["/"])
      return false;
    }
  }
  
  
}
