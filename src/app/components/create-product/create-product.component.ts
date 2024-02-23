import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements OnInit {
  form = new FormControl({
    title: new FormControl<string>(''),
  });

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
