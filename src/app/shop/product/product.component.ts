import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  products = [];
  prodSub : Subscription;

  constructor(
    private productServ : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodSub = this.productServ.productSubject.subscribe(products => {
      this.products = products;
      console.log(this.products)
    });
    this.productServ.emitProducts()
  }


  ngOnDestroy(): void {
    this.prodSub.unsubscribe();
  }

}
