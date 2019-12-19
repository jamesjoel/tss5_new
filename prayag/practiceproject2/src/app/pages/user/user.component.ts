import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  data:any;
  constructor(
    private _userData:UserService
  ) { }

  ngOnInit() {
  }

  demo(){
    this._userData.getUser().subscribe(result => {
      console.log(result);
      // this.data=result.data;
    });
  }
}
