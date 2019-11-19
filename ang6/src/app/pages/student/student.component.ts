import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  

  allStudent:Student;
  constructor(private _student : StudentService) { }

  ngOnInit() {
    this._student.getStudent().subscribe(data => {
       this.allStudent = data;
    });
    // console.log(this._student.getStudent());
  }
  /*getAllStudent(){
    // console.log(this._student.getStudent());
   
  }*/


  comeStudent(student:Student)
  {
    this.allStudent.push(student)
  }
  

}
