import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/student.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:Student;
allStudent:Student[]=[
  {
    name:"rohit",
    age: 22,
    city:"indore"
  },
  {
    name:"neha",
    age:24,
    city:"bhopal"
  }
]

  constructor(
    private _http:HttpClient,
    private _router:Router
  ) { }
 
  studentList(){
    return this.allStudent;
  }

  addStudent(student:Student){
    return this._http.post<any>("http://localhost:3000/api/student",student);
  }

  emptyStudent(){
    return this.student={
      name:"",
      age:null,
      city:""
    }
  }
}
