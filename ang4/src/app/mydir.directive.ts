import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(a:ElementRef) {
    console.log("-------", a);
      a.nativeElement.style.backgroundColor="red";
      a.nativeElement.style.color="#445522";
      a.nativeElement.innerHTML="JAMSE JOEL";
      a.nativeElement.style.display="inline-block";

   }

}
