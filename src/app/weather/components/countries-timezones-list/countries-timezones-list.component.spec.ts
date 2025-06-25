import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesTimezonesListComponent } from './countries-timezones-list.component';

describe('CountriesTimezonesListComponent', () => {
  let component: CountriesTimezonesListComponent;
  let fixture: ComponentFixture<CountriesTimezonesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesTimezonesListComponent]
    });
    fixture = TestBed.createComponent(CountriesTimezonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
