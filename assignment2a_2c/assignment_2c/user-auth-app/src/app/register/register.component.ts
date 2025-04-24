import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private router: Router) {}

  registerUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Registration Successful!');
    this.router.navigate(['/login']);
  }
}
