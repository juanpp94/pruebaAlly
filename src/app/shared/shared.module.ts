import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateTimePipe } from './pipes/format-date-time.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    FormatDateTimePipe,
    SidebarComponent,
    HeaderComponent,
    CardHeaderComponent,
    CardFooterComponent,
    TablePaginationComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatDateTimePipe,
    SidebarComponent,
    HeaderComponent,
    CardHeaderComponent,
    CardFooterComponent,
    TablePaginationComponent,
    TodoListComponent
  ]
})
export class SharedModule { }
