import { Injectable } from '@angular/core';
import { Student } from '../models/student.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  allStudent:Student[]=[
    {
      name:"prayag",
      age:22,
      city:"indore"
    },
    {
      name:"rahul",
      age:23,
      city:"mumbai"
    }
  ]
  
  constructor(private _http: HttpClient) { }


  getStudent(){
    return this._http.get<Student[]>("http://localhost:3000/api/student");
  }

  addStudent(student:Student){
    return this._http.post<any>("http://localhost:3000/api/student",student);
  }

  delStudent(student:Student){
    return this._http.delete<any>(`http://localhost:3000/api/student?id=${student._id}`);
  }

  editStudent(student:Student){
    return this._http.put<any>(`http://localhost:3000/api/student?id=${student._id}`,student);
  }


  emptyStudent:Student={
    name:"",
    age:null,
    city:""
  }


}
