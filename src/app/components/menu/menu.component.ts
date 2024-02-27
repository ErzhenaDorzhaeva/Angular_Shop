import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { CreateProductComponent } from '../create-product/create-product.component';
import { EditingProductComponent } from '../editing-product/editing-product.component';
import { ModalComponent } from '../modal/modal.component';

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
    ModalComponent,
    CreateProductComponent,
    EditingProductComponent,
  ],
})
export class MenuComponent implements OnInit {
  emp = '';
  constructor(
    public productsService: ProductService,
    private router: Router,
    public basketService: BasketService
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
}
