import { Location, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  submitLogin() {
    this.authService
      .login({
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      })
      .subscribe({
        next: () => this.router.navigate(['admin']),
        error: (err) => alert(err.message),
      });
  }

  toBack() {
    this.location.back();
  }
}
