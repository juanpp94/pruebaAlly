import { Component } from '@angular/core';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  countries: string[] = ['germany','france','mexico', 'venezuela'];
  countriesInfo: any[] = [];
  selectedCountry: any = null;

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    for(let i = 0; i < this.countries.length; i++) {
      this.getCountry(this.countries[i]);
    }

  }

  selectCountry(country: any) {
    this.selectedCountry = country
  }

  getCountry(country: string) {
    this.countryService.getCountry(country).subscribe({
      next: this.nextCountry
    });
  }

  private nextCountry = (response: any) => {
    console.log(response);
    this.countriesInfo.push(response[0]);
     console.log(this.countriesInfo);
  }

}
