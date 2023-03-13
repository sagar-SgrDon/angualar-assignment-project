import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './modals/add-employee/add-employee.component';
import { EmployeeService } from './services/employee.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ModalService } from './modals/modal.service';
import { EmployeeMedDetailsComponent } from './components/employee-med-details/employee-med-details.component';
import { EmpMedService } from './services/emp-med.service';
import { NgChartsModule } from 'ng2-charts';
import { EmployeeChartComponent } from './components/employee-chart/employee-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    AddEmployeeComponent,
    EmployeeMedDetailsComponent,
    EmployeeChartComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  providers: [EmployeeService, ModalService, NgbActiveModal, EmpMedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
