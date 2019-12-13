import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { MyformService }  from '../myform.service';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  name: any ="./assets/images/";
  constructor(
    private _upload : UploadService,
    private _form : MyformService
  ) { }

  ngOnInit() {
  }
  upload(fileArr){
    
    let form = this._form.uploadFormCreate(fileArr[0], "image");
    this._upload.fileUpload(form).subscribe(data=>{
      this.name += data.name;
      //console.log(this.name);
    });
  }
  

}
