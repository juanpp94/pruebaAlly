import { Component } from '@angular/core';
import { User } from '../../../../app/core/models/user.interface';
import { CountryService } from 'src/app/core/services/country.service';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  countries: string[] = ['germany','france','mexico', 'venezuela'];
  countriesInfo: any[] = [];
  selectedCountry: any = null;
  currentDateAndTime: any = {};
  countryWeatherInfo: any = {};
  tasks: any[] = [];
  users: User[] = [];
  usersPage: User[] = [];
  currentPage: number = 1;
  perPage: number = 2;
  totalPages: number = 0;

  constructor(private countryService: CountryService, private taskService: TaskService, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    console.log('entre al dashboard',this.router);
    this.getCountries();
    this.getTasks();
    this.getUsers();


  }

  getCountries() {
    for(let i = 0; i < this.countries.length; i++) {
      this.getCountry(this.countries[i]);
    }

  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  getUsers() {
    this.users = this.userService.getUsers();
    this.totalPages = Math.ceil(this.users.length / this.perPage);
    this.loadPage(this.currentPage);
  }


  getCountryWeather() {
    this.countryService.getWeather(this.selectedCountry?.capital).subscribe({
      next: this.nextWeather
    })
  }

  getTimeAndDate(timezone: string) {
    console.log('timezone:',timezone);
    let dateAndTime = this.getDateTimeFromUTCOffset(timezone);
    console.log(dateAndTime);
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
     console.log(this.selectedCountry);
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

 loadPage(pagina: number) {
    this.currentPage = pagina;
    const inicio = (pagina - 1) * this.perPage;
    const fin = inicio + this.perPage;
    this.usersPage = this.users.slice(inicio, fin);
  }

  firstPage() {
    this.loadPage(1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

   nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
   }

    lastPage() {
    this.loadPage(this.totalPages);
    }

    rangeText(): string {
    const inicio = (this.currentPage - 1) * this.perPage + 1;
    const fin = Math.min(this.currentPage * this.perPage, this.users.length);
    return `Mostrar registros del ${inicio} al ${fin} de ${this.users.length} usuarios registrados`;
  }
  }









