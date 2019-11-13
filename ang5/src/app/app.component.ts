import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BoxComponent } from './box/box.component';


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

  ngAfterViewInit(){
    this.demo=this.childData.myStr;
    this.demo2 = this.childData.obj;
  }

}
