import { Injectable } from '@angular/core';
import { Student } from '../models/student.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  allStudent:Student[]=[
    {
      name : "neha",
      age : 25,
      city : "mumbai"
    }
  ]

  constructor(private __http : HttpClient) { }

  getStudent(){
    // return this.allStudent;
    return this.__http.get<Student[]>("http://localhost:3000/api/student");
  }

  addStudent(student:Student) {
    // return this.allStudent;
    
    return this.__http.post<any>("http://localhost:3000/api/student", student);
  }
  delStudent(student : Student){
    console.log("----------------",student)
    return this.__http.delete<any>(`http://localhost:3000/api/student?id=${student._id}`);
  }





  emptyStudent(){
    return {
      name : "",
      age : null,
      city : ""
    }
  }




}
