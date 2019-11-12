import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.interface';

// interface student{
//   id? : number,
//   name : string,
//   age : number,
//   fee : number
//   // address? : string
//   // color[] : any
// }


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  askStuObj:Student={
    name : "",
    age : null,
    fee : null
  };

  studentArr:Student[] = [
    {
      id : 1,
      name : "rohit",
      age : 25,
      fee : 5000
    },
    {
      id : 2,
      name:"nidhi",
      age : 21,
      fee : 6500
    },
    {
      id : 3,
      name : "james",
      age : 23,
      fee : 6800
    },
    {
      id : 4,
      name : "jaya",
      age : 30,
      fee : 4900
    }
  ];
  newStudent:Student={
    name : "",
    age : null,
    fee : null
  }



  constructor() { }

  ngOnInit() {
  }

  save(){
    // console.log(this.newStudent);
    if(this.newStudent.id)
    {
      for(var i=0; i<this.studentArr.length; i++)
      {
        if(this.studentArr[i].id==this.newStudent.id)
        {
          this.studentArr[i]=this.newStudent;
        }
      }
      this.newStudent = {
        name: "",
        age: null,
        fee: null
      }
    }
    else{

      this.newStudent.id = this.studentArr.length+1;
      this.studentArr.push(this.newStudent);
      this.newStudent = {
        name: "",
        age: null,
        fee: null
      }
    }

  }
  askAdd(){
    /*
    this.newStudent = {
      name: "",
      age: null,
      fee: null
    }
    */
  }
  askDelete(a:Student){
    this.askStuObj=a; 
  }
  delete(){
    var n = this.studentArr.indexOf(this.askStuObj);
    this.studentArr.splice(n, 1);
  }
  askEdit(a:Student){
    // this.newStudent=a;
    this.newStudent = Object.assign({}, a);
  }

}
