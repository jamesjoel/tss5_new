import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(
    config:NgbCarouselConfig
  ) { 
    config.interval=3000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=true;
    config.showNavigationArrows=true;
    config.showNavigationIndicators=true;
  }

  ngOnInit() {
  }

}
