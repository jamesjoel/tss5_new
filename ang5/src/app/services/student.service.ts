import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface stu {
  name: string,
  age: number,
  city: string
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  constructor(private _http : HttpClient){}

  studentsArr=[
    {
      name : "james",
      age : 25,
      city : "indore"
    },
    {
      name : "gaurav",
      age : 30,
      city : "ujjain"
    }
  ]

  getStudent(){
    // return this.studentsArr;
    return this._http.get<stu>("http://localhost:3000/api/student");
  }

  
}
