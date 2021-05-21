import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Products[] = [];
  productSubject = new Subject<Products[]>();
  url = `https://api-jstore.espero-soft.com/api/products?API_KEY=adsffsdfds6b-6727-46f4-8bee-2c6ce6293e41`;

  constructor(
    private http : HttpClient,
  ) { this.getProducts(); }

  emitProducts(){
    this.productSubject.next(this.products);
  }


  getProducts(){
    this.http.get(this.url).subscribe((dataProduct : Result) => {
      if(dataProduct.status == 200) {
        this.products = dataProduct.result;
        this.emitProducts()
      }else{
        console.log('error',dataProduct.message)
      }

    })
  }

}
