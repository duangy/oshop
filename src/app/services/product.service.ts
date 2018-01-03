import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product) {
    return this.http.post('api/product/', product);
  }

  getAll(params?: HttpParams) {
    return this.http.get('api/product/', {params: params});
  }

  get(productId) {
    return this.http.get('api/product/'+productId);
  }

  update(productId, product) {
    return this.http.put('api/product/'+productId + '/', product);
  }
}
