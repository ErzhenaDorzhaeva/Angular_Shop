import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { EditingProductComponent } from '../editing-product/editing-product.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product_details',
  templateUrl: './product_details.component.html',
  styleUrl: './product_details.component.scss',
  imports: [CommonModule, ModalComponent, EditingProductComponent],
  standalone: true,
})
@Injectable()
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productsService: ProductService,
    public modalService: ModalService
  ) {}
  products$: Observable<IProduct[]>;
  product: IProduct;
  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {});
    this.route.params.subscribe((params) => {
      const idX = params['id'] - 1;
      this.product = this.productsService.products[idX];
    });
  }
  goToMenu(): void {
    this.router.navigate(['']);
  }
}
