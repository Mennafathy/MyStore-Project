import { CartService } from 'src/app/services/cart.service';
import { Component, OnDestroy } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import cartItem from '../../models/Cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cart: CartService
  ) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  AddToCart(cartList: cartItem) {
    this.cart.addProducts(cartList);
  }
}
