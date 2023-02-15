import { ProductService } from 'src/app/services/product.service';
import { Component, Output,OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import cartItem from '../../models/Cart';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  products: Product = new Product();
  productId: any;
  amount: number = 1;
  data:any=[];
  productData: any = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId =Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.getProductById();
  }
  AddToCart(product: Product) {
    this.cartService.addProducts(new cartItem(product, this.amount));
    alert(`${product.name} has Been Added Successfully!`);
  }
  getProductById() {
    this.productService.getProducts().subscribe((res) => {
      this.data=res
      this.products = this.data.find((el:any) => {
       return  el.id === this.productId;
      })
    });
  }
  updateProducts(products:Product)
  {
    this.AddToCart(products);
  }
}
