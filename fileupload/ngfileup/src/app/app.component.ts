import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngfileup';
  name: string ;
  constructor(private _http : HttpClient){ }

  up(file){
    let fd = new FormData();
    fd.append("image", file[0]);
    this._http.post<any>("http://localhost:3000/api/user/upload", fd).subscribe(data=>{
      console.log(data);
      this.name=data.path;
    });
  }
}
