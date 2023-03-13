import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeMedical } from '../models/empMedical';

@Injectable({
  providedIn: 'root',
})
export class EmpMedService {
  constructor(private http: HttpClient) {}
  url = 'https://angular-assignemnt.onrender.com/medicalUsers';

  displayEmpMedRecords() {
    return this.http.get<EmployeeMedical[]>(this.url);
  }
}
