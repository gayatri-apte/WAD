import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  register() {

    this.userService.setUser(this.user);

    alert("Registration Successful");

    this.router.navigate(['/login']);
  }
}