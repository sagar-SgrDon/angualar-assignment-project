import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  @ViewChild('f') form!: NgForm;
  faArrowDown = faArrowDown;
  isUserAdded = false;
  isUserUpdated = false;
  id: any = this.shared.id;
  employeeData: any = this.shared.employeeData;

  constructor(
    public activeModal: NgbActiveModal,
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    public shared: SharedService,
    private router: Router
  ) {}

  addUser(data: Employee) {
    this.employeeService.addEmployee(data).subscribe((res) => {
      if (res) {
        this.isUserAdded = true;
        this.form.reset();
        setTimeout(() => {
          this.modalService.dismissAll();
          this.isUserAdded = false;
          this.router.navigate(['']);
        }, 1500);
      }
    });
  }

  updateUser(data: Employee) {
    // console.log(this.id, data);
    this.employeeService.updateEmployee(this.id, data).subscribe((res) => {
      if (res) {
        this.isUserUpdated = true;
        this.form.reset();
        setTimeout(() => {
          this.modalService.dismissAll();
          this.isUserUpdated = false;
          this.router.navigate(['']);
        }, 1500);
      }
    });
  }
}
