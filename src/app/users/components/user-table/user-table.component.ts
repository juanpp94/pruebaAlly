import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  @Input() usersPage: User[] = [];
  @Input() columns: string[] = [];

}
