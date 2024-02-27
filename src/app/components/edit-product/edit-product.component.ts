import { Component, Inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  constructor(
    private productService: ProductService,
    public route: Router,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  @Input() product: IProduct;
  form = new FormGroup({
    title: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
  });

  submit(product: IProduct) {
    this.productService.editing({
      id: this.data.id,
      title: this.form.value.title as string,
      price: this.form.value.price as number,
      description: this.form.value.description as string,
      image: 'https://i.pravatar.cc',
      category: this.form.value.category as string,
      rating: {
        rate: 0,
        count: 0,
      },
    });
    this.dialogRef.close();
    this.route.navigate(['']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
