import { Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { LoginComponent } from './components/login/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDetailsComponent } from './components/product_details/product_details.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'menu/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
];
