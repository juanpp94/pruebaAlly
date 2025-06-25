import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { CountryService } from 'src/app/core/services/country.service';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent {

  countries: string[] = ['germany','france','mexico', 'venezuela'];
    countriesInfo: any[] = [];
    selectedCountry: any = null;
    currentDateAndTime: any = {};
    countryWeatherInfo: any = {};
    tasks: any[] = [];


    constructor(private countryService: CountryService, private taskService: TaskService, private router: Router) {

    }

    ngOnInit() {
      this.getCountries();
      this.getTasks();



    }

    getCountries() {
      for(let i = 0; i < this.countries.length; i++) {
        this.getCountry(this.countries[i]);
      }

    }

    getTasks() {
      this.tasks = this.taskService.getTasks();
    }




    getCountryWeather() {
      this.countryService.getWeather(this.selectedCountry?.capital).subscribe({
        next: this.nextWeather
      })
    }

    getTimeAndDate(timezone: string) {
      let dateAndTime = this.getDateTimeFromUTCOffset(timezone);
      this.currentDateAndTime = dateAndTime;
    }

    selectCountry(country: any) {
      this.selectedCountry = country
      this.getCountryWeather();
    }

    getCountry(country: string) {
      this.countryService.getCountry(country).subscribe({
        next: this.nextCountry,
        complete: this.nextCountryWeather
      });
    }


    private nextCountryWeather = () => {
      this.getCountryWeather();
    }

    private nextCountry = (response: any) => {
      this.countriesInfo.push(response[0]);
       this.selectedCountry = this.countriesInfo[0];
       this.getTimeAndDate(this.selectedCountry.timezones[0]);
    }

    private nextWeather = (response: any) => {
      this.countryWeatherInfo = response;
    }



    getDateTimeFromUTCOffset(offset: string): { fecha: string, hora: string } {
    // 1. Extraer el offset en horas
    const match = offset.match(/UTC([+-]\d{1,2}):(\d{2})/);
    if (!match) {
      throw new Error('Formato de zona horaria no válido');
    }

    let hoursOffset = parseInt(match[1], 10);
    const minutesOffset = parseInt(match[2], 10);

    // 2. Calcular el total en minutos (y convertirlo a milisegundos)
    const totalOffsetMinutes = hoursOffset * 60 + Math.sign(hoursOffset) * minutesOffset;
    const totalOffsetMillis = totalOffsetMinutes * 60 * 1000;

    // 3. Obtener la fecha actual en UTC y aplicarle el offset
    const nowUtc = new Date();
    const localMillis = nowUtc.getTime() + totalOffsetMillis;
    const localDate = new Date(localMillis);

    // 4. Formatear la fecha y hora
    const fecha = localDate.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC' // ya aplicamos el offset manualmente
    });

    const hora = localDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'UTC'
    });

    return { fecha, hora };
  }



}
