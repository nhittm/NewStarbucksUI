import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private http: HttpClient) { }
  private APIProduct = 'https://665aef83003609eda45f4d1a.mockapi.io/products'
  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.APIProduct)
  }
  getProductById(id:any) {
    return this.http.get(this.APIProduct+'/'+id)
  }
}
