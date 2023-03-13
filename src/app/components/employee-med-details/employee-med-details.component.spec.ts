import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMedDetailsComponent } from './employee-med-details.component';

describe('EmployeeMedDetailsComponent', () => {
  let component: EmployeeMedDetailsComponent;
  let fixture: ComponentFixture<EmployeeMedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
