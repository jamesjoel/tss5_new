import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http:HttpClient
  ) { }

  getAllStudent(){
    return this._http.get<any>("http://localhost:3000/api/student");
  }

  student(id:string){
    return this._http.get<any>("http://localhost:3000/api/student/" + id)
  }

}
