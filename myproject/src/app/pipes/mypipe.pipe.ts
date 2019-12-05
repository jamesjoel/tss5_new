import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(a, b, c){
    if(b<25){
      var x = (a*10)/100;
      
      var  y =  a+x;
    }
    else{
      var x = (a * 20) / 100;
      var y = a + x;
    }
    if(c=="female"){
      y += y * 5 /100;
      return y;
    }
    return y;

  }

}
