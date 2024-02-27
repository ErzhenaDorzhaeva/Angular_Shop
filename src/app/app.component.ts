import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDetailsComponent } from './components/product_details/product_details.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    FilterProductsPipe,
    CreateProductComponent,
    ReactiveFormsModule,
    NzModalComponent,
  ],
})
export class AppComponent {
  title = 'AngularShop';
}
