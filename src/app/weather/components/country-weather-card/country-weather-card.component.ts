import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-weather-card',
  templateUrl: './country-weather-card.component.html',
  styleUrls: ['./country-weather-card.component.scss']
})
export class CountryWeatherCardComponent {

  @Input() countryWeatherInfo: any = {};

}
