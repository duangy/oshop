import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpParams } from '@angular/common/http';
import { Product } from '../models/product.models';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  category: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    ) {
      this.productService.getAll().switchMap(products => {
        this.products = <Product[]>products;
        return route.queryParamMap;
      }).subscribe(params => {
      this.category = parseInt(params.get('category'));
      if(this.category) {
        this.productService.getAll(new HttpParams().set('category',this.category.toString()))
      .subscribe(products => {this.products = <Product[]>products});
      }
      else{
        this.productService.getAll().subscribe(products => {this.products = <Product[]>products;})
      }
      
    });
   }

  ngOnInit() {
  }

}
