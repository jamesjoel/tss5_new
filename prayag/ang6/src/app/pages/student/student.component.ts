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
  student:Student=this._student.emptyStudent();


  constructor(private _student:StudentService) { }

  ngOnInit() {
    this._student.getStudent()
                 .subscribe(data => this.allStudent=data); 
  }

  comeStudent(student:Student){
    // this.allStudent.push(student);
    if(this.student._id){
      this._student.editStudent(this.student).subscribe(data => {
        console.log("...........................",data);
      });
    }
    else{
      this._student.addStudent(student).subscribe(data => {
        if(data){
          console.log(data);
          this.allStudent.push(data);
        }
      });
    }
  }

  askDelete(stu:Student){
    this.student=stu;
  }

  studentDelete(){
    this._student.delStudent(this.student).subscribe(data =>{
      console.log(data);
      if(data){
        var n =this.allStudent.indexOf(this.student);
        this.allStudent.splice(n,1);
      }
    });
  }

  askEdit(stu:Student){
    this.student=stu;
  };

}
 