import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countries-timezones-list',
  templateUrl: './countries-timezones-list.component.html',
  styleUrls: ['./countries-timezones-list.component.scss']
})
export class CountriesTimezonesListComponent {

  @Output() onSelectedTimezone = new EventEmitter<any>
  @Input() timezones: any = [];

  getTimeAndDate(timezone: string) {
    this.onSelectedTimezone.emit(timezone);
  }

}
