import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];
  cartData: {len : number, cost : number} = {len : 0, cost : 0};
  constructor() {}

  addProductToCart(product: Products):void {
    const productExist = this.cart.find(e=>e.product == product);
    if(productExist) {
      productExist.quantity++;
    }else{
      const newProduct = {product, quantity : 1}
      this.cart.push(newProduct);
    }
    this.updateDataCart();
  }

  updateDataCart() {

    let len = 0;
    let cost =0;

    this.cart.forEach((e)=>{
      len += e.quantity;
      cost += e.product.price * e.quantity;
    })
    this.cartData.len = len;
    this.cartData.cost = cost;
  }


  deleteProduct(product: Products):void {
    const indexProduct = this.cart.findIndex((e)=>e.product == product);
    if(indexProduct) {
      if(this.cart[indexProduct].quantity>1){
        this.cart[indexProduct].quantity--;
      }
    }else{
      this.cart.splice(indexProduct, 1);
    }
    this.updateDataCart()
  }
}
