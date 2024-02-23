import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { dishToBasket } from '../../constants';
import { IDish } from '../../types';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class BasketComponent {
  public empty: boolean = true;
  @Input() dishes: Array<IDish>;

  ngOnInit(): void {
    this.dishes = dishToBasket;
    console.log(this.dishes);
  }
}
