import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss',
})
export class DeliveryComponent implements OnInit {
  constructor(private basketService: BasketService, private route: Router) {}
  public sum: number = 0;

  ngOnInit() {
    this.basketService.basket.map((product) => {
      this.sum += product.price;
    });
  }

  myForm = new FormGroup({
    telefonNumber: new FormControl<string>('', Validators.required),
    adress: new FormControl<string>('', Validators.required),
  });

  submit() {
    this.basketService.checkout({
      id: this.basketService.basket.length - 1,
      telefonNumber: this.myForm.value.telefonNumber as string,
      adress: this.myForm.value.adress as string,
      sum: this.sum,
      basketsProduct: this.basketService.basket,
    });
    alert('Заказ успешно принят');
  }
}
