import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')!);
  }

  addUsers(users: any[]) {
    localStorage.setItem('users',JSON.stringify(users));
  }
}
