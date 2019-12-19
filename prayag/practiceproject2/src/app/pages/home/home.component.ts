import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allStudent:any=[];
  constructor(
    private _student:StudentService
  ) { }

  ngOnInit() {
    this._student.getAllStudent().subscribe(data=>{
      this.allStudent=data;
    });
  }



}
