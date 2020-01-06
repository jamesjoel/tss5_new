import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private _http:HttpClient
  ) { }

  url:any="http://localhost:3000/api/fileupload";
  
  upload(data){
    return this._http.post<any>(this.url,data);
  }

}
