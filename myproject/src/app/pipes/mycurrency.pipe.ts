import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency'
})
export class MycurrencyPipe implements PipeTransform {

  transform(sal, con){
    switch(con){
      case 'india': return '&#8377;'+sal;
                    break;
      case 'britain': return '&#163;' +sal;
                    break;
      case 'US': return '&#36;' +sal;
                    break;

    }
  }

}
