import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyformService {

  constructor() { }

  uploadFormCreate(file, name, data=null)
  {
    let formData = new FormData();
    formData.append(name, file);
    if(data != null){
      formData.append("allData", data);
    }
    return formData;
  }

}

/*
const formData = new FormData();
      formData.append('file', this.fileData);
      this.http.post('url/to/your/api', formData)
        .subscribe(res => {
          console.log(res);
          this.uploadedFilePath = res.data.filePath;
          alert('SUCCESS !!');
        })


*/
