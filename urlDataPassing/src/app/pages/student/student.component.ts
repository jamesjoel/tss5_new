import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  data:any;
  constructor(
    private _actRoute : ActivatedRoute,
    private _stu : StudentService
  ) { }

  ngOnInit() {
    // this._actRoute.queryParams.subscribe(data=>{
    //   this._stu.student(data.id).subscribe(result=>{
    //     this.data= result;
    //   });
    // });
    this._actRoute.paramMap.subscribe(data=>{
      // console.log(data.params);
      this._stu.student(data.params.id).subscribe(result => {
        this.data= result;
      });
    })
  }

}
