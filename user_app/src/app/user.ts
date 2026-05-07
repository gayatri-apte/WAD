import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userData: any = {};

  setUser(data: any) {
    this.userData = data;
  }

  getUser() {
    return this.userData;
  }
}