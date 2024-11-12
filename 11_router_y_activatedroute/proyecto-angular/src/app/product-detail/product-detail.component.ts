import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto: string = '';
  color: string = '';

  // Con ActivatedRoute en el constructor se puede obtener la ruta
  constructor(
    private _route: ActivatedRoute
  ) { }

  // Obtenemos el productId de la ruta cuando se carga el componente
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.producto = params['productId'];
      this.color = params['category'];
    });
  }

}
