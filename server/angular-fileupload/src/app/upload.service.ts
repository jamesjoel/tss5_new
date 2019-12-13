import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http : HttpClient) { }

  fileUpload(data){
    return this._http.post<any>("http://localhost:3000/api/upload", data);
  }
}

/*
/home/james/tss5_new

const formData = new FormData();
      formData.append('file', this.fileData);
      this.http.post('url/to/your/api', formData)
        .subscribe(res => {
          console.log(res);
          this.uploadedFilePath = res.data.filePath;
          alert('SUCCESS !!');
        })

*/
