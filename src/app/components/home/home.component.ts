import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, take } from 'rxjs';
import { AddEmployeeComponent } from 'src/app/modals/add-employee/add-employee.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employee$!: Observable<any>;
  faEdit = faEdit;
  faTrash = faTrash;
  id: any;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private shared: SharedService
  ) {}

  ngOnInit() {
    this.displayEmployees();
  }

  showImage(fName: any, lName: any) {
    return `https://hub.dummyapis.com/Image?text=${
      fName[0] + lName[0]
    }&height=45&width=45`;
  }

  displayEmployees() {
    // this.employee$ = this.employeesService.displayEmployee();
    this.employee$ = this.employeeService.displayNewEmployees();
  }

  openAddUserModal() {
    this.shared.employeeData = {};
    this.shared.editUser = false;
    this.shared.addUser = true;
    this.openModal();
  }

  openModal() {
    this.modalService.open(AddEmployeeComponent, {
      scrollable: true,
      centered: true,
      keyboard: false,
      backdrop: 'static',
    });
  }
  openEditUserModal(id: any) {
    this.shared.addUser = false;
    this.shared.editUser = true;
    this.id = id;
    if (this.id) {
      this.employeeService
        .getEmployee(this.id)
        .pipe(take(1))
        .subscribe((emp) => {
          // console.log(emp);
          this.shared.id = this.id;
          this.shared.employeeData = emp;
          this.openModal();
        });
    }
  }

  deleteUser(id: string) {
    if (confirm('Are you sure You want to Delete this User?'))
      this.employeeService
        .deleteEmployee(id)
        .pipe(take(1))
        .subscribe((res) => {
          if (res) {
            this.displayEmployees();
          }
        });
  }
}
