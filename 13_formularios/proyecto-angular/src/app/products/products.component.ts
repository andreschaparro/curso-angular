import { Component } from '@angular/core';
import { Product, productsList } from './products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // Ya tenemos disponible el mock
  productsList: Product[] = productsList;

}
