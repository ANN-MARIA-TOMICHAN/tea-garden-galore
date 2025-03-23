
import { Component, Input } from '@angular/core';

interface TeaProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-tea-product',
  templateUrl: './tea-product.component.html',
  styleUrls: ['./tea-product.component.css']
})
export class TeaProductComponent {
  @Input() product!: TeaProduct;
  
  addToCart() {
    console.log('Added to cart:', this.product);
    // In a real app, this would call a cart service
  }
}
