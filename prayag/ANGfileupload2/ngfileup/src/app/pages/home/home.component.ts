import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload/upload.service';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form:any;
  path:string;
  msg:string;
  constructor(
    private _upload:UploadService,
    private _form:FormService
  ) { }

  ngOnInit() {
  }

  upload(fileArr){
    this.form=this._form.selectFile(fileArr[0],"image");
    // this._upload.upload(this.form).subscribe(data=>{
    //   // console.log(data);
    //   this.path=data.fileUrl;
    //   this.msg=data.msg;
    // },
    // err=>{
    //   console.log(err);
    // });
  }

  pushFile(){
    this._upload.upload(this.form).subscribe(data=>{
      // console.log(data);
      this.path=data.fileUrl;
      this.msg=data.msg;
    },
    err=>{
      console.log(err);
    });
  }

}
