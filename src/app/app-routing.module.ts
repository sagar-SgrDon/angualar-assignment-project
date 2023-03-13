import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './modals/add-employee/add-employee.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeMedDetailsComponent } from './components/employee-med-details/employee-med-details.component';
import { EmployeeChartComponent } from './components/employee-chart/employee-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees-chart', component: EmployeeChartComponent },
  { path: 'add-employee/new', component: HomeComponent },
  { path: 'add-employee/:id', component: HomeComponent },
  { path: 'emp-med-details', component: EmployeeMedDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
