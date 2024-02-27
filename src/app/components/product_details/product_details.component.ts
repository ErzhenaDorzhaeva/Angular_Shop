import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { EditingProductComponent } from '../editing-product/editing-product.component';

@Component({
  selector: 'app-product_details',
  templateUrl: './product_details.component.html',
  styleUrl: './product_details.component.scss',
  imports: [CommonModule, EditingProductComponent, NzModalModule],
  standalone: true,
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productsService: ProductService,
    public location: Location
  ) {}
  product: IProduct;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idX = params['id'] - 1;
      this.product = this.productsService.products[idX];
    });
  }
  isVisible = false;

  goToMenu(): void {
    this.location.back();
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
