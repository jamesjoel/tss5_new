import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private _http:HttpClient
  ) { }

  fileUpload(data){
    return this._http.post<any>("http://localhost:3000/api/user/upload",data);
  }
}
