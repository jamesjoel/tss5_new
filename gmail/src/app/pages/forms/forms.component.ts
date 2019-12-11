import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  myForm : FormGroup;
  submitted = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }
  submit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    console.log(this.myForm.value);
  }

}
