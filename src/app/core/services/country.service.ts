import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  api: string = environment.api;
  apiWeather: string = environment.apiWeather;
  apiWeatherKey: string = environment.apiWeatherKey;

  constructor(private http: HttpClient) { }


  getCountry(country: string): Observable<any> {
    return this.http.get<any>(`${this.api}/name/${country}`);
  }

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiWeather}?q=${city}&appid=${this.apiWeatherKey}&units=metric`)
  }


}
