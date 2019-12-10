import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/Models/student.interface';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  @Output() goStudent=new EventEmitter();

  student:Student={
    name:"",
    age:null,
    city:""
  }

  constructor() { }

  ngOnInit() {
  }
  send(){
    this.goStudent.emit(this.student)
    this.student={
      name:"",
      age:null,
      city:""
    }
  }

}
