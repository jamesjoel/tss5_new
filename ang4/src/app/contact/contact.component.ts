import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  msg:string="This is Contact Page Message";
  constructor() { }

  ngOnInit() {
  }

}
