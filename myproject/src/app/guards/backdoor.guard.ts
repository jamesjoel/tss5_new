import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(
    private _authService : AuthService,
    private _router : Router
    ){ }
  canActivate() : boolean {
    if(this._authService.isLoggedIn()==true){
      return true;
    }
    else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  
}
