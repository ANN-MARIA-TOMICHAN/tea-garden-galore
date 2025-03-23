
import { Component } from '@angular/core';

interface TeaProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredTeas: TeaProduct[] = [
    {
      id: 1,
      name: 'Earl Grey Supreme',
      description: 'A classic black tea with bergamot essence',
      price: 12.99,
      imageUrl: 'assets/images/earl-grey.jpg',
      category: 'Black'
    },
    {
      id: 2,
      name: 'Jasmine Pearl',
      description: 'Hand-rolled green tea scented with jasmine',
      price: 15.99,
      imageUrl: 'assets/images/jasmine-pearl.jpg',
      category: 'Green'
    },
    {
      id: 3,
      name: 'Chamomile Dream',
      description: 'Soothing herbal blend with honey notes',
      price: 9.99,
      imageUrl: 'assets/images/chamomile.jpg',
      category: 'Herbal'
    },
    {
      id: 4,
      name: 'Darjeeling First Flush',
      description: 'Premium first harvest from the Himalayas',
      price: 18.99,
      imageUrl: 'assets/images/darjeeling.jpg',
      category: 'Black'
    }
  ];
}
