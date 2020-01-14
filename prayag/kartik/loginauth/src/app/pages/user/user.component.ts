import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/Models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private _user:UserService
  ) { }

  userData:User={
    name:"",
    email:""
  }

  ngOnInit() {
    // this._user.getUser().subscribe(data=>{
    //   // console.log(data);
    //   this.userData=data;
    //   // console.log(this.userData.name)
    // });
  }
  

}
