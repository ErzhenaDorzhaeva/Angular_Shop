import { Injectable } from '@angular/core';
import { IData, IProduct } from '../types';
@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: IProduct[] = [];
  order: IData[] = [];
  public openBasket: boolean = false;
  public openDelivery: boolean = false;

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

  addOrder(data: IData) {
    this.order.push(data);
    this.basket = [];
    return (this.openBasket = false), (this.openDelivery = false);
  }

  deleteOrder(data: IData) {
    this.order.forEach((param) => {
      if (param.id === data.id) {
        let idX = this.order.indexOf(param);
        this.order.splice(idX, 1);
      }
    });
  }
}
