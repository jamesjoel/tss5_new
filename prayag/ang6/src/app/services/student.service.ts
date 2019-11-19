import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


allStudent:Student[]=[
  {
    name: "neha",
    age: 33,
    city: "banglore"
  },
  {
    name:"rahul",
    age: 24,
    city: "indore"
  }
]

  constructor(private _http: HttpClient) { }

  getStudent(){
    // return this.allStudent;
    return this._http.get<Student[]>("http://localhost:3000/api/student")
  }

}

