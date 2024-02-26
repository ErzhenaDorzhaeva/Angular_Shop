import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [];
  constructor(private http: HttpClient, public route: Router) {}

  setProducts(params: IProduct[]) {
    this.products = params;
    console.log('setProducts', params);
  }

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(tap((newProducts) => this.setProducts(newProducts)));
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((prod) => this.products.push(prod)));
  }

  editing(product: IProduct) {
    return this.http
      .put<IProduct>(
        `${'https://fakestoreapi.com/products'}/${product.id}`,
        product
      )
      .subscribe((data) => {
        this.products = this.products.map((product) => {
          if (product.id === data.id) return data;
          else return product;
        });
        this.route.navigate(['']);
      });
  }

  delete(product: IProduct) {
    return this.http
      .delete<any>(`${'https://fakestoreapi.com/products'}/${product.id}`)
      .subscribe((data) => {
        this.products.forEach((prod) => {
          if (prod.id === product.id) {
            let idX = this.products.indexOf(prod);
            this.products.splice(idX, 1);
          }
        });
      });
  }
}
