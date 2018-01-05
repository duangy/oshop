import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.models';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product){
    //this.cartService.getOrCreateCart();
  }
  ngOnInit() {
  }

}
