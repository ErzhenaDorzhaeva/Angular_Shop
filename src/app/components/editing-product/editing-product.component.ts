import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
@Component({
  selector: 'app-editing-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './editing-product.component.html',
  styleUrl: './editing-product.component.scss',
})
export class EditingProductComponent {
  constructor(private productService: ProductService) {}
  @Input() product: IProduct;
  form = new FormGroup({
    title: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
  });

  submit(product: IProduct) {
    this.productService.editing({
      id: product.id,
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
  }
}
