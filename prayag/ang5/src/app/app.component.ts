import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './models/student.models'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

newObj:Student[];

  constructor(private _student:StudentService ) {}

  getData(){
  this._student.getStudent()
          .subscribe(data => this.newObj=data )
  }
}