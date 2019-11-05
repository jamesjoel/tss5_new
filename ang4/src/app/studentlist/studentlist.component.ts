import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  studentArr = [
    {
      name : "rohit",
      age : 25,
      fee : 5000
    },
    {
      name:"nidhi",
      age : 21,
      fee : 6500
    }
  ];
  newStudent={
    name : "",
    age : null,
    fee : null
  }



  constructor() { }

  ngOnInit() {
  }

  save(){
    // console.log(this.newStudent);
    this.studentArr.push(this.newStudent);
  }

}
