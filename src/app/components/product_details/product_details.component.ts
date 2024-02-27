import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product_details',
  templateUrl: './product_details.component.html',
  styleUrl: './product_details.component.scss',
  imports: [
    CommonModule,
    EditProductComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productsService: ProductService,
    public location: Location,
    public dialog: MatDialog
  ) {}
  product: IProduct;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idX = params['id'] - 1;
      this.product = this.productsService.products[idX];
    });
  }
  idX: number;

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: { id: this.product.id },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('complete');
    });
  }

  goToMenu(): void {
    this.location.back();
  }
}
