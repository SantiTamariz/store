import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interfaces/product';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //Declarar array Product, haces desde interface.
  // ! ya se inicializará en el futuro
  products!: Product[];

  //Constructor que mete el objeto productService el cual tiene el metodo
  constructor(private productsService: ProductsService) { }

  //Método que se invoca automáticamente, me subscribo al método getProducts
  ngOnInit(): void {
    //Subscripción al método observable
    //Pipe método devulve observable y .subscribe
    //tap viene de rxjs, biblioteca reactiva 
    this.productsService.getProducts().pipe(
      //tap(res => console.table(res)) Ponerlo por la consola
      tap((products: Product[]) => this.products = products)
    ).subscribe();
  }

}
