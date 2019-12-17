import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { all } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allData=[];
  constructor(
    private _stu : StudentService
  ) { }

  ngOnInit() {
    this._stu.getAllStudent().subscribe(data=>{
      this.allData = data;
    });
  }

}
