import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Probar la API con postman
  private baseURL: string = 'https://fakestoreapi.com/products';

  // Inyección de la dependencia HttpClient
  constructor(
    // Las inyecciones siempre empiezan con _
    private _httpClient: HttpClient
  ) { }

  public getAllProducts(sort?: string): Observable<IProduct[]> {
    const params = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }

  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(sort?: string): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    // Angular resuelve internamente el JSON.stringify
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}
