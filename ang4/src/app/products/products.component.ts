import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data:Product[]=[
    {
      title : "Sony",
      detail : "somtgsdf sdfg sdfg sdfg dsfg",
      price : 2500.00
    },
    {
      title : "I-Phone",
      detail : "sd sdfg sdfg sdfg sdfg",
      price : 3560.00
    },
    {
      title : "Samsung",
      detail : "sdfg sdfg sdg sdfg sdfg sdfg",
      price : 150.00
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
