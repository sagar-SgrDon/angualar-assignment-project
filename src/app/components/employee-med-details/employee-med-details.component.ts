import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeMedical } from 'src/app/models/empMedical';
import { EmpMedService } from 'src/app/services/emp-med.service';

@Component({
  selector: 'app-employee-med-details',
  templateUrl: './employee-med-details.component.html',
  styleUrls: ['./employee-med-details.component.css'],
})
export class EmployeeMedDetailsComponent {
  employee$: Observable<EmployeeMedical[]>;
  policyMaxAmount!: number;
  constructor(private empMedService: EmpMedService) {
    this.employee$ = this.empMedService.displayEmpMedRecords();
  }

  calPolicyMaxAmount(salary: number) {
    if (salary < 500000) return (this.policyMaxAmount = 1000000);
    else return (this.policyMaxAmount = salary * 2.5);
  }

  calBalanceLeft(claimedAmount: number) {
    return this.policyMaxAmount - claimedAmount;
  }
}
