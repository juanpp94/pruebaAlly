import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesCardListComponent } from './components/countries-card-list/countries-card-list.component';
import { CountryWeatherCardComponent } from './components/country-weather-card/country-weather-card.component';
import { CountriesTimezonesListComponent } from './components/countries-timezones-list/countries-timezones-list.component';
import { CountryHourCardComponent } from './components/country-hour-card/country-hour-card.component';
import { CountryDataCardComponent } from './components/country-data-card/country-data-card.component';


@NgModule({
  declarations: [
    WeatherPageComponent,
    CountriesCardListComponent,
    CountryWeatherCardComponent,
    CountriesTimezonesListComponent,
    CountryHourCardComponent,
    CountryDataCardComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ]
})
export class WeatherModule { }
