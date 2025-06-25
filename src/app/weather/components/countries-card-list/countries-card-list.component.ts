import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countries-card-list',
  templateUrl: './countries-card-list.component.html',
  styleUrls: ['./countries-card-list.component.scss']
})
export class CountriesCardListComponent {

  @Output() onSelectedCountry = new EventEmitter<any>
  @Input() countriesInfo: any = [];

  selectCountry(country: any) {
    this.onSelectedCountry.emit(country);
  }

}
