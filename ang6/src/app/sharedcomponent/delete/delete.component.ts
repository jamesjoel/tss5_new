import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.interface';
 
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() student:Student;
  @Output() confDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  del()
  {
    this.confDelete.emit();
  }

}
