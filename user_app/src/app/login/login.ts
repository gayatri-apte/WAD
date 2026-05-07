import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {

    let user = this.userService.getUser();

    if (
      this.email === user.email &&
      this.password === user.password
    ) {

      alert("Login Successful");

      this.router.navigate(['/profile']);

    } else {

      alert("Invalid Credentials");
    }
  }
}