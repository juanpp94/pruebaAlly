import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataCardComponent } from './country-data-card.component';

describe('CountryDataCardComponent', () => {
  let component: CountryDataCardComponent;
  let fixture: ComponentFixture<CountryDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDataCardComponent]
    });
    fixture = TestBed.createComponent(CountryDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
