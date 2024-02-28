import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BasketService } from '../../services/basket.service';
import { IProduct } from '../../types';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class BasketComponent implements OnInit {
  public basket: IProduct[] = [];
  public sum: number = 0;
  constructor(
    private basketService: BasketService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.basket = this.basketService.getBasket();
    this.basket.forEach((product) => {
      this.sum += product.price;
    });
  }
  deleteProduct(product: IProduct) {
    this.basketService.deleteBasket(product);
    this.sum -= product.price;
  }
  toBack() {
    this.location.back();
  }
}
