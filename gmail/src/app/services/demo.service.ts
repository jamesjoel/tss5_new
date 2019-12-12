import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  x:any;
  constructor(private _http : HttpClient) {
    this.x = this._http;
   }
}
