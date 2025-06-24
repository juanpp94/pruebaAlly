import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDateTimePipe } from './pipes/format-date-time.pipe';



@NgModule({
  declarations: [
    FormatDateTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatDateTimePipe
  ]
})
export class SharedModule { }
