import { Component, OnInit } from '@angular/core';
import { MyservService } from '../services/myserv.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  msg:string="This is Contact Page Message";
  
  constructor(private a : MyservService) { }

  ngOnInit() {
  }

  callMe()
  {
    this.a.demo();
  }



}
