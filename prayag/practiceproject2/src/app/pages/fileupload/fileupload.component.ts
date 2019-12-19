import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  path:string="";
  constructor(
    private _form:FormService,
    private _upload:UploadService
  ) { }

  ngOnInit() {
  }

  upload(fileArr){
    let form=this._form.uploadForm(fileArr[0],"image");
    this._upload.fileUpload(form).subscribe(data => {
      // console.log(data);
      this.path = data.fileUrl;
    },
    err => {
      console.log(err);
    });
  }


}
