import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { StudentService } from './services/student.service';
interface stu{
  name : string,
  age : number,
  city : string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BoxComponent, { static : false}) childData;

  demo:any;
  demo2={
    name : "",
    age : null,
    city : ""
  };
  title = 'ang5';
  a="blue";
  newObj:stu[]=[];  
  constructor(private _student: StudentService, private ref : ChangeDetectorRef){

  }



  ngAfterViewInit(){
    this.demo=this.childData.myStr;
    this.demo2 = this.childData.obj;
    this.ref.detectChanges();
  }
  getStudentData(){
    this.newObj = this._student.getStudent().subscribe(data=>{ console.log(data);
    });
  }



}
