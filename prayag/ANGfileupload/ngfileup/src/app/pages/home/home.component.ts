import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  path:string;
  msg:string;
  form:any;
  constructor(
    private _upload:UploadService,
    private _form:FormsService
  ) { }

  ngOnInit() {
  }

  upload(fileArr){
    this.form=this._form.selectFile(fileArr[0],"image");
    // this._upload.upload(this.form).subscribe(data => {
    //   console.log(data);
    //   this.path=data.fileUrl;
    // },
    // err =>{
    //   console.log(err);
    // });
  }

  pushFile(){
    this._upload.upload(this.form).subscribe(data => {
      // console.log(data);
      this.path=data.fileUrl;
      this.msg=data.msg;
    },
    err =>{
      console.log(err);
    });
  }
}
