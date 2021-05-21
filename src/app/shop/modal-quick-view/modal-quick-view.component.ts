import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-modal-quick-view',
  templateUrl: './modal-quick-view.component.html',
  styleUrls: ['./modal-quick-view.component.css']
})
export class ModalQuickViewComponent implements OnInit {

  @Input() products: Products[];

  constructor() { }

  ngOnInit(): void {

  }

}
