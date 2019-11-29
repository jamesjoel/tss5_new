import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap)=> {
    let id = parseInt(params.get('id'));
    this.departmentId=id;
    });
  }


}
