import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //Recibe un producto 
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
