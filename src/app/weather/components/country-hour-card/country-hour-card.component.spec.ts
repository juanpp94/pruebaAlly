import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHourCardComponent } from './country-hour-card.component';

describe('CountryHourCardComponent', () => {
  let component: CountryHourCardComponent;
  let fixture: ComponentFixture<CountryHourCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryHourCardComponent]
    });
    fixture = TestBed.createComponent(CountryHourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
