import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  ngOnInit(): void {}
}
