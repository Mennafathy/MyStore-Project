import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import cartItem from 'src/app/models/Cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public total: number = 0;
  public cartList: cartItem[] = [];
  public name: string = '';
  public address: string = '';
  public creditCard: string = '';
  alertEmpty: boolean = false;
  public userData: any[] = [];

  constructor(private cartService: CartService,private router:Router) {
    
    this.cartList = this.cartService.getProducts();
    this.total = 0;
    this.cartList.forEach((el) => {
      el.amount ? (this.total += el.products.price * el.amount) : 0;
    });
  }

  ngOnInit(): void {}
  addData(name: string, address: string, creditCard: string) {
    if(this.total==0)
    {
      return;
    }
    this.userData.push(name);
    this.userData.push(address);
    this.userData.push(creditCard);
    this.userData.push(this.total);
    this.cartService.userData$.next(this.userData);
    this.router.navigateByUrl('/confirmationMessage')

  }

  changeAmount(i: number, data: any) {
    this.cartList[i].amount = Number(data.value);
    if (this.cartList[i].amount === 0) {
      this.cartService.deleteProduct(i);
      this.emptyCart();
    }
    this.total = 0;
    this.cartList.forEach((el) => {
      el.amount ? (this.total += el.products.price * el.amount) : 0;
    });
  }
  getData() {
    alert(`Thank you ${this.userData[0]} for Your Order`);
  }
  emptyCart() {
    if (this.cartList.length == 0) {
      this.alertEmpty = true;
    }
  }
}
