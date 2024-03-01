import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../../../services/basket.service';
import { IData } from '../../../../types';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  constructor(public basketService: BasketService, private route: Router) {}
  public order: IData[];

  deleteOrder(order: IData) {
    this.basketService.deleteOrder(order);
  }
  goToMenu() {
    this.route.navigate(['']);
  }
}
