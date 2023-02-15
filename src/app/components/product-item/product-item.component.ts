import { Component, Input, Output, EventEmitter } from '@angular/core';
import  Product  from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import  cartItem  from 'src/app/models/Cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() products: Product =new Product();
  amount:number=1;
  @Output() addAmount=new EventEmitter()
  constructor(private cartService: CartService) {}
  
  AddToCart(product: Product)
  {
    this.addAmount.emit(new cartItem(product, this.amount))
    alert(`${product.name} has Been Added Successfully!`)
  }

}

