import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {



  topic=["Angular","nodejs", "Vue"]

  user=new User("Prayag", "abc@gmail.com",32382393920,"")
  constructor() { }

  ngOnInit() {
  }

}
