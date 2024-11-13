import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  loading: boolean = true;
  color: string = '';

  // Inyección de la dependencia ActivatedRoute para obtener la ruta
  // Inyección de la dependencia ApiService
  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }

  // Obtenemos el productId de la ruta, que va a ser un string, cuando se carga el componente
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {

      // Se castea productId que es un string a Number
      this._apiService.getProduct(Number(params['productId'])).subscribe({

        // next y error son la forma adecuada de manejar una respuesta asincróna dentro de un subscribe
        next: (data: IProduct) => {
          this.product = data;
          this.color = this.product?.price as number > 200 ? 'red' : '';
          this.loading = false;
        },
        error: (error: any) => {
          console.error(error);
          this.loading = false;
        }

      });
    });
  }

}
