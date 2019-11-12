import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.interface'
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {


  @Input() childProduct:Product;

  constructor() { }

  ngOnInit() {
  }

}
