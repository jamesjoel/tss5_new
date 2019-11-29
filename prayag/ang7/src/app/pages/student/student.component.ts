import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.interface';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudent:Student[];
  student:Student=this._student.emptyStudent;

  constructor(private _student:StudentService ) { }


  ngOnInit() {
    // this.allStudent=this._student.allStudent;
    this._student.getStudent()
                  .subscribe(data => {
                      this.allStudent=data
      });

  }

  addStudent(student:Student){
    // console.log(student);
    if(this.student._id){
      this._student.editStudent(this.student).subscribe(data => {
        if(data){
          for(let i=0; i<this.allStudent.length; i++){
            if(this.allStudent[i]._id==this.student._id){
              this.allStudent[i]=this.student;
              break;
            }
          }
        }
      });
    }
    else{
      this._student.addStudent(student).subscribe(data =>{
        if(data){
          this.allStudent.push(data);
        }
      });
    }

  }
  askDelete(stu:Student){
    this.student=stu;
  }
  deleteStudent(){
    console.log(this.student)
    this._student.delStudent(this.student).subscribe(data => {
      if(data){
        var n=this.allStudent.indexOf(this.student);
        this.allStudent.splice(n,1);
      }
    });
  }

  askEdit(stu:Student){
    this.student=stu; 
    this.student={... stu};
  }

}
