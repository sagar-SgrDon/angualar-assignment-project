import { TestBed } from '@angular/core/testing';

import { EmpMedService } from './emp-med.service';

describe('EmpMedService', () => {
  let service: EmpMedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpMedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
