import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _user:UserService
  ) { }

  ngOnInit() {
  }
  demo(){
    this._user.getUser().subscribe(data=>{
      console.log("users....")
    });
  }

}
