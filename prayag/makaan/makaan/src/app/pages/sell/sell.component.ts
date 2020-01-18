import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedIndex:number;

  clickMe(){
    if(this.selectedIndex>=1)
    {
      this.selectedIndex=0
      if(this.selectedIndex=0){
        this.selectedIndex=1;
      }
    }else{
      console.log(this.selectedIndex)
      this.selectedIndex=1
    }
  }
  previous(){
    this.selectedIndex=0
  }
  next(){
    this.selectedIndex=2
  }

  sellForm=new FormGroup({
    location:new FormGroup({
      house_number_street :new FormControl(''),
      locality:new FormControl(''),
      city:new FormControl('')
    })
  });

  propertyForm=new FormGroup({
    built_area:new FormGroup({
      area:new FormControl(''),
      unit:new FormControl('')
    }),
    rooms:new FormGroup({
      bedroom:new FormControl(''),
      bathroom:new FormControl('')
    }),
    floors:new FormGroup({
      total:new FormControl(''),
      property_floor:new FormControl('')
    })

  });





  selectType(a){
    console.log(a.toElement.name)
  }

}
