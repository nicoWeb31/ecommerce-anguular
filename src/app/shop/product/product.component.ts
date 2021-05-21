import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  productsa : Products[]= [];
  prodSub : Subscription;


  constructor(
    private productServ : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodSub = this.productServ.productSubject.subscribe(products => {
      this.productsa = products;
      console.log(this.productsa)
    });
    this.productServ.emitProducts()
  }


  ngOnDestroy(): void {
    this.prodSub.unsubscribe();
  }

}
