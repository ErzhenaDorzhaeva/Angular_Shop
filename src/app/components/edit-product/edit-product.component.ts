import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

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
    MatInputModule,
    MatFormFieldModule,
    NgIf,
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

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.pattern(/^[+-]?[0-9]+(,[0-9]+)?$/),
    ]),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
  });

  submit() {
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
