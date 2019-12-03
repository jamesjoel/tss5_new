import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  registrationForm= this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    password:[''],
    newPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });


  // registrationForm=new FormGroup({
  //   userName:new FormControl('Prayag'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });

  ngOnInit() {
  }
  // loadApi(){
  //   this.registrationForm.setValue({
  //     userName: "Sonu",
  //     password: "aaa",
  //     confirmPassword: "aaa",
  //     address:{
  //       city:"Indore",
  //       state:"M.P",
  //       postalCode:"452001"
  //     }
  //   });

  //   // this.registrationForm.patchValue({
  //   //   userName: "Sonu",
  //   //   password: "aaa",
  //   //   confirmPassword: "aaa"
  //   // });
  // }

}
