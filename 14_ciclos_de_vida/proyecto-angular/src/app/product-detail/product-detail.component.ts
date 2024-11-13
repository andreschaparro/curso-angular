import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  // Con ActivatedRoute en el constructor se puede obtener la ruta
  constructor(
    private _route: ActivatedRoute
  ) { }

  // Obtenemos el productId de la ruta, que va a ser un string, cuando se carga el componente
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      // El setTimeout es para probar el loading
      // Esto se utiliza siempre para esperar a que el backend responda
      setTimeout(() => {
        // ['productId'] es un number, por eso la comparación es con == y no con ===
        this.product = productsList.find(product => product.id == params['productId'])
        this.loading = false;
        this.color = this.product?.price as number > 5 ? 'red' : '';
      }, 1500)
    });
  }

}
