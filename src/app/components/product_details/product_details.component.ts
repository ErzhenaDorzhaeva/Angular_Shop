import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productsService: ProductService,
    public modalService: ModalService,
    public location: Location
  ) {}
  product: IProduct;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idX = params['id'] - 1;
      this.product = this.productsService.products[idX];
    });
  }
  goToMenu(): void {
    this.location.back();
  }
}
