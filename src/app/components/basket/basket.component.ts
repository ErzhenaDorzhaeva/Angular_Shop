import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../services/basketService';
import { IProduct } from '../../types';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class BasketComponent {
  public basket: IProduct[] = [];
  public sum: number = 0;
  constructor(private basketService: BasketService, private route: Router) {
    this.basket = basketService.getBasket();
    this.basket.forEach((product) => {
      this.sum += product.price;
    });
  }

  toMenu() {
    this.route.navigate(['']);
  }
}
