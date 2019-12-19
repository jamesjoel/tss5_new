import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/student.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:Student;
allStudent:Student[];

  constructor(
    private _http:HttpClient,
    private _router:Router
  ) { }
 
  studentList(){
    return this.allStudent;
  }

  getStudent(){
    return this._http.get<Student[]>("http://localhost:3000/api/student");
  }

  addStudent(student:Student){
    return this._http.post<any>("http://localhost:3000/api/student",student);
  }

  delStudent(student:Student){
    // console.log(student)
    return this._http.delete<any>(`http://localhost:3000/api/student?id=${student._id}`);
  }

  editStudent(student:Student){
    return this._http.put<any>(`http://localhost:3000/api/student?id=${student._id}`,student);
  }


  emptyStudent(){
    return this.student={
      name:"",
      age:null,
      city:""
    }
  }
}
