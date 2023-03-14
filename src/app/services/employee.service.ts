import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

  url2 = 'https://angular-assignemnt.onrender.com/employee';

  constructor(private http: HttpClient) {}

  displayEmployee() {
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(data: Employee) {
    return this.http.post(this.url2, data);
  }

  displayNewEmployees() {
    return this.http.get<Employee[]>(this.url2);
  }

  getEmployee(id: string) {
    return this.http.get(this.url2 + `/${id}`);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.url2 + `/${id}`);
  }

  updateEmployee(id: string, employee: Employee) {
    return this.http.put(this.url2 + `/${id}`, employee);
  }
}
