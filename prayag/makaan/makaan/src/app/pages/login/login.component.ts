import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _auth:AuthService,
    private _router:Router
  ) { }
  user:any={
    email:"",
    password:""
  }

  ngOnInit() {
  }

  login(){
    
  }

}
