import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class BasketComponent {
  public empty: boolean = true;

  ngOnInit(): void {}
}
