import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(
    private _auth:AuthService
  ) { }

  intercept(req,next){
    let headers=req.clone({
      setHeaders:{
        Authorization:this._auth.getToken()
      }
    });
    return next.handle(headers);
  }
}
