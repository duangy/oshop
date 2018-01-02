import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product) {
    return this.http.post('api/product/', product);
  }

  getAll() {
    return this.http.get('api/product/');
  }

  get(productId) {
    return this.http.get('api/product/'+productId);
  }
}
