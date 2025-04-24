import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.email === savedUser.email && this.password === savedUser.password) {
      alert('Login Successful!');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}
