//https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';

import { My3Component } from '../my3/my3.component';

@Component({

  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, AfterViewInit {
  @ViewChild(My3Component, {static : false}) myData; 

  newName="JAMES";

  
  constructor(private ref : ChangeDetectorRef) { }

  
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.newName = this.myData.name;
    this.ref.detectChanges();
  }



}
