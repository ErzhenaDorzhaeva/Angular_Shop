import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { AuthService } from '../../services/auth.service';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { CreateProductComponent } from '../create-product/create-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FilterProductsPipe,
    CreateProductComponent,
    EditProductComponent,
    MatInputModule,
    NgIf,
  ],
})
export class MenuComponent implements OnInit {
  emp = '';
  constructor(
    public productsService: ProductService,
    private router: Router,
    public basketService: BasketService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe();
  }

  goToDetailsPage(product: IProduct): void {
    this.router.navigate(['menu/', product.id]);
  }

  deleteProduct(product: IProduct) {
    this.productsService.delete(product);
  }

  addToBasket(product: IProduct) {
    this.basketService.addBasket(product);
  }

  goToOrdersMenu() {
    this.router.navigate(['admin']);
  }
}
