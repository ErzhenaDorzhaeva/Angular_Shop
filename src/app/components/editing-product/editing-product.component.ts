import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-editing-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './editing-product.component.html',
  styleUrl: './editing-product.component.scss',
})
@Injectable()
export class EditingProductComponent implements OnInit {
  constructor(private productService: ProductService) {}
  form = new FormGroup({
    title: new FormControl<string>(''),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.title.value);
    // this.productService
    //   .update({
    //     title: this.form.value.title as string,
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //     category: 'electronic',
    //     rating: {
    //       rate: 42,
    //       count: 1,
    //     },
    //   })
    //   .subscribe();
  }
}
