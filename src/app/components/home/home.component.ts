import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  empData: any;
  modalRef: any;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private shared: SharedService
  ) {}

  ngOnInit() {
    this.displayEmployees();
  }

  image(fName: any, lName: any) {
    return `https://hub.dummyapis.com/Image?text=${
      fName[0] + lName[0]
    }&height=45&width=45`;
  }

  displayEmployees() {
    // this.employee$ = this.employeesService.displayEmployee();
    this.employee$ = this.employeeService.displayNewEmployees();
  }

  openAddUserModal() {
    this.shared.editUser = false;
    this.shared.addUser = true;
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.open(AddEmployeeComponent, {
      scrollable: true,
      centered: true,
      // keyboard: false,
      backdrop: 'static',
    });

    this.modalRef.result
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  openEditUserModal() {
    this.shared.addUser = false;
    this.shared.editUser = true;
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    if (this.id) {
      this.employeeService
        .getEmployee(this.id)
        .pipe(take(1))
        .subscribe((emp) => {
          this.empData = emp;
          console.log(emp);
          this.openModal();
          this.modalRef.componentInstance.id = this.id;
          this.modalRef.componentInstance.employeeData = this.empData;
        });
    }
  }

  deleteUser(id: string) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      if (res) {
        this.displayEmployees();
      }
    });
  }
}
