import { Component } from '@angular/core';
import { User } from './core/models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaAlly';
//   users: any[] = [
//   { "id": 1, "nombre": "Juan Pérez", "email": "juan.perez@example.com", "password": "pass1234" },
//   { "id": 2, "nombre": "Ana Gómez", "email": "ana.gomez@example.com", "password": "qwerty123" },
//   { "id": 3, "nombre": "Carlos López", "email": "carlos.lopez@example.com", "password": "abcDEF456" },
//   { "id": 4, "nombre": "Mariana Ramos", "email": "mariana.ramos@example.com", "password": "securePwd!" },
//   { "id": 5, "nombre": "Luis Martín", "email": "luis.martin@example.com", "password": "password2023" },
//   { "id": 6, "nombre": "Sofía Núñez", "email": "sofia.nunez@example.com", "password": "sofi7890" },
//   { "id": 7, "nombre": "Diego Álvarez", "email": "diego.alvarez@example.com", "password": "diegopass1" },
//   { "id": 8, "nombre": "Valeria Morales", "email": "valeria.morales@example.com", "password": "val1234pwd" },
//   { "id": 9, "nombre": "Matías Soto", "email": "matias.soto@example.com", "password": "matias#2024" },
//   { "id": 10, "nombre": "Camila Torres", "email": "camila.torres@example.com", "password": "cam1laPass" }
// ]
users: any[] = [];

  ngOnInit() {
    for(let i = 0; i < this.users.length; i++) {
      this.users[i]['fechaRegistro'] = new Date();
      this.users[i]['fechaUltimoLogin'] = new Date();
    }
    localStorage.setItem('users',JSON.stringify(this.users));
  }
}
