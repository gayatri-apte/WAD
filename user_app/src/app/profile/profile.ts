import { Component } from '@angular/core';

import { UserService } from '../user';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})

export class ProfileComponent {

  user: any;

  constructor(private userService: UserService) {

    this.user = this.userService.getUser();
  }
}