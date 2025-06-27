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
  }

  }









