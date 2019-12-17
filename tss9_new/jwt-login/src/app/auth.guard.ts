import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router : Router,
    private _authService : AuthService

  ){}
  canActivate():boolean {
    if(this._authService.isLoggedIn()){
      
      return true;
    }else{
      
      this._router.navigate(['/']);
      return false;
    }
  }
  
}
