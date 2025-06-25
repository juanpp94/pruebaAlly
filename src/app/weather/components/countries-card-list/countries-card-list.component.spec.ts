import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCardListComponent } from './countries-card-list.component';

describe('CountriesCardListComponent', () => {
  let component: CountriesCardListComponent;
  let fixture: ComponentFixture<CountriesCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesCardListComponent]
    });
    fixture = TestBed.createComponent(CountriesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
