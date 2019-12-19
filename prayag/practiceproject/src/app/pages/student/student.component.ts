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
  student:Student=this._student.emptyStudent();

  ngOnInit() {
    this._student.getStudent().subscribe(data=> {
      this.allStudent=data;
    });
  }

  addStudent(student:Student){
    if(student._id)
    {
      this._student.editStudent(student).subscribe(data => {
        console.log("............................",data);
        if(data)
        {
          for(var i=0; i<this.allStudent.length; i++)
          {
            if(this.allStudent[i]._id==student._id)
            {
              this.allStudent[i]=student;
              break;
            }
          }
        }
      });
    }
    else
    {
      this._student.addStudent(student).subscribe( data=> {
        console.log(data)
        if(data){
          this.allStudent.push(data);
        }
      });
    }
  }

  askEdit(student:Student){
    this.student=student;
    this.student={... student};
  }

  askDel(student:Student){
    this.student=student;
  }
  delete(){
    this._student.delStudent(this.student).subscribe(data => {
      if(data){
        var n= this.allStudent.indexOf(this.student);
        this.allStudent.splice(n,1);
        this.student=this._student.emptyStudent();
      }
    })
  }



}
