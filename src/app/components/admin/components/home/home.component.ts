import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../../../services/basket.service';
import { IData } from '../../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public basketService: BasketService, private route: Router) {}
  public order: IData[];
  ngOnInit() {}

  deleteOrder(order: IData) {
    this.basketService.deleteOrder(order);
  }
}
