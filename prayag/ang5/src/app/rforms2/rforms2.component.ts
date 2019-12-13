import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { myValid } from '../helpers/myvalidation.validators';

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
      fullname:['',[Validators.required,myValid]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }


  demo(x){
    console.log(x);
    switch(x){
      case 1:this.submitted=true;
            break;
      case 2:this.submitted=true;
            break;
      case 3:this.submitted=true;
            break;
    }
  }
  submit(){
    this.submitted=true;
    console.log(this.myForm.value)
  }

}
