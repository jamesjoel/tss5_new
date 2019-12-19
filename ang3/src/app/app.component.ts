import { Component } from '@angular/core';
import { DemoService  } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : "<h2>this is testing</h2>",
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  
  name="james";
  age=25;

}
