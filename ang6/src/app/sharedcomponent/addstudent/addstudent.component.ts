import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  @Output() goStudent = new EventEmitter();
  @Input() student:Student={
    name : "",
    age : null,
    city : ""
  };
  
  constructor() { }

  ngOnInit() {
  }
  send(){
    this.goStudent.emit(this.student);
  }



}
