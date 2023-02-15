import cartItem from 'src/app/models/Cart';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: cartItem[] = [];
  public userData$ = new BehaviorSubject<Product[]>([]);
  constructor() {}

  getProducts(): cartItem[] {
    return this.cartList;
  }

  addProducts(cartitem: cartItem): cartItem[] {
    this.cartList.push(cartitem);
    return this.cartList;
  }

  deleteProduct(index: number) {
    this.cartList.splice(index, 1);
  }
}
