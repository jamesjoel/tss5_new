import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-rforms2',
  templateUrl: './rforms2.component.html',
  styleUrls: ['./rforms2.component.scss']
})
export class Rforms2Component implements OnInit {

  submitted=false;
  myForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      fullname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

}
