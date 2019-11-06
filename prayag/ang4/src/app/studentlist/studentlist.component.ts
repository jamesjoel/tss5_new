import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
studentArr =[
  {
    name: "rohit",
    age: 24,
    fee: 5500
  },
  {
    name: "nidhi",
    age: 23,
    fee: 8900
  },
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
    this.studentArr.push(this.newStudent);
  }

}
