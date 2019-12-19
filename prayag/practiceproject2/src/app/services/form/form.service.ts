import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  uploadForm(file,name,data=null){
    let formData=new FormData();
    formData.append(name,file);
    if(data!=null)
    {
      formData.append("allData",data);
    }
    return formData;
  }
}
