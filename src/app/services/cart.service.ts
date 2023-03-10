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
    let index=this.cartList.findIndex(el=>el.products.id===cartitem.products.id)
    if(index==-1)
    {
      this.cartList.push(cartitem);
    }
    else
    {
      this.cartList[index].amount=Number(this.cartList[index].amount) + Number(cartitem.amount)
    }
   
    return this.cartList;
  }

  deleteProduct(index: number) {
    this.cartList.splice(index, 1);
  }
}
