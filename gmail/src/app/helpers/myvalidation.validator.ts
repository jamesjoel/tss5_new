import { AbstractControl } from '@angular/forms';

export function myValid(c : AbstractControl){
    
    let arr = c.value.split("");
    // console.log(arr);
    if(arr[0] != "J"){
        return { abc : true };
    }
    return null;
}
