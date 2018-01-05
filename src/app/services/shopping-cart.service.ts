import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.models';

@Injectable()
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  private create() {
    return this.http.post('api/product/shopping-cart/', null);
  }

  private getCart(cartId: string) {
    return this.http.get('api/product/shopping-cart/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if(cartId) {return cartId;}

    let result = await this.create();
    localStorage.setItem('carId', result['id']);
    return result['id'];
    
  }

  async addToCart(product:Product) {
    let cartId = await this.getOrCreateCartId();
    
    
  }
}
