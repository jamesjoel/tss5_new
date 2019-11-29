import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {



  departments:any=[
    {id:1,name:"angular"},
    {id:2,name:"Node"},
    {id:3,name:"Mongodb"},
    {id:4,name:"bootstrap"},
  ]
  constructor() {}

  ngOnInit() {
  }

}
