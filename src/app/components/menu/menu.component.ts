import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
@Injectable()
export class MenuComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
