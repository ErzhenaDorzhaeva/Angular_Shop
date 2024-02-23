import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { CreateProductComponent } from '../create-product/create-product.component';
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
  ],
})
@Injectable()
export class MenuComponent implements OnInit {
  products$: Observable<IProduct[]>;
  emp = '';
  constructor(public productsService: ProductService) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {});
  }
}
