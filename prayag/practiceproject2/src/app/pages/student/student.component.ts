import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  data:any;
  constructor(
    private _actRoute : ActivatedRoute,
    private _student : StudentService
  ) { }

  ngOnInit() {
    // this._actRoute.queryParams.subscribe(data => {
    //   console.log(data)
    //   this._student.student(data.id).subscribe(result => {
    //     console.log(result);
    //     this.data=result;
    //   });
    // });

    this._actRoute.paramMap.subscribe(data => {
      // console.log(data);
      this._student.student(data.params.id).subscribe(result => {
        // console.log(result);
        this.data=result;
      });
    });
  }

}
