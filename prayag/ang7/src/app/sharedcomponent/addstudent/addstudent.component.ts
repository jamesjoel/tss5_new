import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../../models/student.interface';
import {StudentService } from '../../services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  @Output() gostudent=new EventEmitter();
  @Input() student:Student=this._student.emptyStudent;

  constructor(private _student:StudentService ) { }

  ngOnInit() {
  }
  send(){
    this.gostudent.emit(this.student);
    // this.student=this._student.emptyStudent;  
    this.student={
      name:"",
      age:null,
      city:""
    }
  }

  demo(){
    this.student={
      name:"",
      age:null,
      city:""
    }
  }

}
