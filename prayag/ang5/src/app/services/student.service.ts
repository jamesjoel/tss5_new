import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.models'



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private _http:HttpClient) { }

studentArr:Student[]=[
  {
    name:"rahul",
    age: 22,
    city: "indore"
  },
  {
    name: "Mohan",
    age: 23,
    city: "delhi"
  }
]

getStudent(){
// return this.studentArr;
return this._http.get<Student[]>("http://localhost:3000/api/student");
}

}
