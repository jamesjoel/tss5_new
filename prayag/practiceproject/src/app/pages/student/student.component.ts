import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/Models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(
    private _student:StudentService
  ) { }

  allStudent:Student[];

  ngOnInit() {
    this.allStudent=this._student.studentList()
  }

  addStudent(student:Student){
    this.allStudent.push(student);
  }



}
