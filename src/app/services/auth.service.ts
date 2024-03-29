import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  public good: boolean;
  public canEdit: boolean = false;
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: IUser): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@gmail.com' &&
      userInfo.password === 'admin123'
    ) {
      this.setToken('admintoken');
      this.good = true;
      this.canEdit = true;
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }

  logout() {
    this.canEdit = false;
    this.router.navigate(['']);
  }
}
