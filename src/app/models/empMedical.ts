export class EmployeeMedical {
  id!: number;
  policyName!: string;
  salary!: number;
  claimedAmount!: number;
  numberOfDependents!: number;

  constructor() {}

  get policyMaxAmount() {
    if (this.salary < 500000) return 1000000;
    else return this.salary * 2.5;
  }
}
