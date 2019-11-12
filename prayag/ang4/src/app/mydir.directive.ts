import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(a:ElementRef) {
    console.log("-------------------",a);
    a.nativeElement.style.backgroundColor="#123ade";
    a.nativeElement.style.color="white";
    a.nativeElement.innerHTML="PRAYAG PATDAR";
    a.nativeElement.style.display="inline-block";
    
   }

}
