import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : Cart[] = [];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    console.log(this.cart)
  }


  addProduct(product: Products){
    this.cartService.addProductToCart(product)
  }

  removeProduct(product: Products){
    this.cartService.deleteProduct(product)
  }

}
