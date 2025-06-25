import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableFooterComponent } from './user-table-footer.component';

describe('UserTableFooterComponent', () => {
  let component: UserTableFooterComponent;
  let fixture: ComponentFixture<UserTableFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTableFooterComponent]
    });
    fixture = TestBed.createComponent(UserTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
