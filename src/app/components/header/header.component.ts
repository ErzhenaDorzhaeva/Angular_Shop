import { CommonModule, NgIf } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../services/basket.service';
import { BasketComponent } from '../basket/basket.component';
import { DeliveryComponent } from '../delivery/delivery.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, BasketComponent, DeliveryComponent, NgIf],
  standalone: true,
})
export class HeaderComponent {
  constructor(
    private route: Router,
    public basketService: BasketService,
    public authService: AuthService
  ) {}

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
    this.basketService.openBasket = true;
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        this.basketService.openDelivery = false;
        return `with: ${reason}`;
    }
  }

  goToDelivery() {
    this.basketService.openBasket = false;
    this.basketService.openDelivery = true;
  }

  goToUserPage() {
    this.authService.logout();
  }

  back() {
    this.basketService.openDelivery = false;
    this.basketService.openBasket = true;
  }
}
