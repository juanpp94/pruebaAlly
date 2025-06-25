import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateTimePipe } from './pipes/format-date-time.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    FormatDateTimePipe,
    SidebarComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatDateTimePipe,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
