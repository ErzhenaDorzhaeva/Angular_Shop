import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ModalService } from '../../services/modal.service';
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
@Injectable()
export class MenuComponent implements OnInit {
  emp = '';
  constructor(
    public productsService: ProductService,
    public modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe();
  }

  goToDetailsPage(product: IProduct): void {
    this.router.navigate(['menu/', product.id]);
  }
}
