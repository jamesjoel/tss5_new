import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }


  demo(){
    console.log("server call ------ ");
  }
}
