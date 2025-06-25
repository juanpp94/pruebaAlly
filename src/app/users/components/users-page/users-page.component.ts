import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

   users: User[] = [];
      usersPage: User[] = [];
      currentPage: number = 1;
      perPage: number = 2;
      totalPages: number = 0;
      columns = ['Nombre','Email','Fecha Registro','Último Login'];

    constructor(private userService: UserService) {

    }

    ngOnInit() {
       this.getUsers();
    }

    getUsers() {
      this.users = this.userService.getUsers();
      this.totalPages = Math.ceil(this.users.length / this.perPage);
      this.loadPage(this.currentPage);
    }

    loadPage(pagina: number) {
      this.currentPage = pagina;
      const inicio = (pagina - 1) * this.perPage;
      const fin = inicio + this.perPage;
      this.usersPage = this.users.slice(inicio, fin);
    }

    firstPage() {
      this.loadPage(1);
    }

    previousPage() {
      if (this.currentPage > 1) {
        this.loadPage(this.currentPage - 1);
      }
    }

     nextPage() {
      if (this.currentPage < this.totalPages) {
        this.loadPage(this.currentPage + 1);
      }
     }

      lastPage() {
      this.loadPage(this.totalPages);
      }

      rangeText(): string {
      const inicio = (this.currentPage - 1) * this.perPage + 1;
      const fin = Math.min(this.currentPage * this.perPage, this.users.length);
      return `Mostrar registros del ${inicio} al ${fin} de ${this.users.length} usuarios registrados`;
    }


}
