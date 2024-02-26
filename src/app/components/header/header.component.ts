import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class HeaderComponent {
  constructor(private route: Router) {}

  toBasketPage() {
    this.route.navigate(['basket']);
  }
}
