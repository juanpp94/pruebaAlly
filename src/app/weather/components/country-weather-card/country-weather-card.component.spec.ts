import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWeatherCardComponent } from './country-weather-card.component';

describe('CountryWeatherCardComponent', () => {
  let component: CountryWeatherCardComponent;
  let fixture: ComponentFixture<CountryWeatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryWeatherCardComponent]
    });
    fixture = TestBed.createComponent(CountryWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
