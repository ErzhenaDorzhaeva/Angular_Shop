import { Injectable } from '@angular/core';
import { IProduct } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: IProduct[] = [];

  getBasket() {
    return this.basket;
  }

  addBasket(product: IProduct) {
    return this.basket.push(product);
  }
}
