import Product from 'src/app/models/product';
export default class cartItem {
  products: Product;
  amount: number;
  constructor(products: Product, amount: number) {
    this.products = products;
    this.amount = amount;
  }
}