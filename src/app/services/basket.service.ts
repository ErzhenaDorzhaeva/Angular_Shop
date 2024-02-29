import { Injectable } from '@angular/core';
import { IData, IProduct } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: IProduct[] = [];
  order: IData[] = [];
  public openBasket: boolean = false;

  getBasket() {
    return this.basket;
  }

  addBasket(product: IProduct) {
    return this.basket.push(product);
  }

  deleteBasket(product: IProduct) {
    this.basket.forEach((params) => {
      if (params.id === product.id) {
        let idX = this.basket.indexOf(params);
        this.basket.splice(idX, 1);
      }
    });
  }

  checkout(data: IData) {
    return this.order.push(data);
  }

  deleteOrder(data: IData) {
    this.order.splice(data.id, 1);
  }
}
