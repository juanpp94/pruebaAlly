import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-hour-card',
  templateUrl: './country-hour-card.component.html',
  styleUrls: ['./country-hour-card.component.scss']
})
export class CountryHourCardComponent {

  @Input() currentDateAndTime: any = {};
  @Input() selectedCountry: any = {};

}
