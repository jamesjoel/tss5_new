import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-delstudent',
  templateUrl: './delstudent.component.html',
  styleUrls: ['./delstudent.component.scss']
})
export class DelstudentComponent implements OnInit {

  @Input() student:Student;
  @Output() deletestu=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.deletestu.emit();
  }

}
