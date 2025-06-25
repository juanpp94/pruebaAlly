import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { UserTableComponent } from './components/user-table/user-table.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
