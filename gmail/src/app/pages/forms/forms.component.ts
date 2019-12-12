import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myValid } from '../../helpers/myvalidation.validator';
import { DemoService } from '../../services/demo.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  myForm : FormGroup;
  submitted = false;
  constructor(private fb : FormBuilder, private _demo : DemoService) { }

  ngOnInit() {
    this._demo.x.get("http://localhost:3000/api/user").subscribe(data=>{
      console.log(data);
    });



    this.myForm = this.fb.group({
      fullname : ['', [Validators.required, myValid]],
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
