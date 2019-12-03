import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {



  topics=["Angular","nodejs", "Vue"]

  user=new User("", "abc@gmail.com",3238239390,"")
  constructor() { }

  ngOnInit() {
  }

}
