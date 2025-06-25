import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-data-card',
  templateUrl: './country-data-card.component.html',
  styleUrls: ['./country-data-card.component.scss']
})
export class CountryDataCardComponent {

  @Input() selectedCountry: any = {};
}
