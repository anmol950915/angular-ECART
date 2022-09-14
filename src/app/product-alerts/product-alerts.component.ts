import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {
    this.changebuttonmsg();
  }
  btnmsg = 'abc';

  changebuttonmsg() {
    for (let product of products) {
      if (product.onsale && !product.instock) {
        this.btnmsg = 'Advance book';
        alert('Hi');
      } else {
        this.btnmsg = 'Notify Me';
        alert('Hi there');
      }
    }
  }
}
