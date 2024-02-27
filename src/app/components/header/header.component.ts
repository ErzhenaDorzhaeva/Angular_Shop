import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, MatIconModule],
  standalone: true,
})
export class HeaderComponent {
  constructor(private route: Router) {}

  toBasketPage() {
    this.route.navigate(['basket']);
  }
}
