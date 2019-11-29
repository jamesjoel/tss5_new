import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  student:Student[];
  constructor(private _student:StudentService) { }

  ngOnInit() {
    this.student=this._student.studentArr;

  }

}
