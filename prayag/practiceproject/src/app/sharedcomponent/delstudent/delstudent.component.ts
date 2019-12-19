import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/Models/student.interface';

@Component({
  selector: 'app-delstudent',
  templateUrl: './delstudent.component.html',
  styleUrls: ['./delstudent.component.scss']
})
export class DelstudentComponent implements OnInit {



  @Output() delete=new EventEmitter();
  @Input() student:Student;
  constructor() { }

  ngOnInit() {
  }
  del(){
    this.delete.emit();
  }

}
