import { Component, OnInit, Input } from '@angular/core';
interface student {
  name: string,
  age: number
}

@Component({
  selector: 'app-mini-demo',
  templateUrl: './mini-demo.component.html',
  styleUrls: ['./mini-demo.component.scss']
})
export class MiniDemoComponent implements OnInit {

  @Input() cName:string;
  @Input() cNewStudent:student;

  constructor() { }

  ngOnInit() {
  }

}
