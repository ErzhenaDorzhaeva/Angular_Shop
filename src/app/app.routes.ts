import { Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDetailsComponent } from './components/product_details/product_details.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'menu/:id', component: ProductDetailsComponent },
];
