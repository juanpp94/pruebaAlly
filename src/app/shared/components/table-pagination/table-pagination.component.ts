import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent {

  @Output() onFirstPage = new EventEmitter<any>;
  @Output() onNextPage = new EventEmitter<any>;
  @Output() onPreviousPage = new EventEmitter<any>;
  @Output() onLastPage = new EventEmitter<any>;
  @Input() currentPage: number  = 1;
  @Input() totalPages: number = 0;
  @Input() rangeText: string = '';

  firstPage() {
    this.onFirstPage.emit();
  }

  lastPage() {
    this.onLastPage.emit();
  }

  previousPage() {
    this.onPreviousPage.emit();
  }

  nextPage() {
    this.onNextPage.emit();
  }



}
