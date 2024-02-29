import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from '../../services/basket.service';
import { BasketComponent } from '../basket/basket.component';
import { DeliveryComponent } from '../delivery/delivery.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, MatIconModule, BasketComponent, DeliveryComponent],
  standalone: true,
})
export class HeaderComponent {
  constructor(private route: Router, public basketService: BasketService) {}

  toBasketPage() {
    this.route.navigate(['basket']);
  }

  toLoginPage() {
    this.route.navigate(['login']);
  }

  private offcanvasService = inject(NgbOffcanvas);
  closeResult = '';

  open(content: TemplateRef<any>) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
  goToDelivery() {
    this.basketService.openBasket = true;
  }
  back() {
    this.basketService.openBasket = false;
  }
}
