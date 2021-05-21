import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: Cart[]=[];
  cartData;

  constructor(
    private cartServ : CartService,
  ) { }

  ngOnInit(): void {
    this.cart = this.cartServ.cart;
    this.cartData = this.cartServ.cartData;
    console.log(this.cartData)
  }



}
