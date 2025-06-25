import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API = environment.api;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): User | undefined {
    let users: User[] | null = this.getUsers();
    let user;
    if(users) {
      user = users.find(u => u.email === email && u.password === password);
    }
    return user;


  }

  register(email: string, password: string, name: string) {
    let users: User[] | null = this.getUsers();
    let user;
    if(users) {
      user = users.find(u => u.email === email);
      if(user) {
        return false;
      } else {
        this.addUser(users, name, email, password);
        return true;
      }
    } else {
      this.addUser([], name, email, password);
      return true;
    }
  }

  addUser(users: User[], name: string, email: string, password: string) {
    users.push({nombre: name, email: email, password: password, fechaRegistro: new Date(), fechaUltimoLogin: new Date(), id: users.length + 1 })
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsers(): User[] | null {
    let users = JSON.parse(localStorage.getItem('users')!);
    return users as User[];
  }


}
