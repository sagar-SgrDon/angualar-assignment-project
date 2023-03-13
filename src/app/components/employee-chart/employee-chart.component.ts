import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-chart',
  templateUrl: './employee-chart.component.html',
  styleUrls: ['./employee-chart.component.css'],
})
export class EmployeeChartComponent implements OnInit {
  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.displayNewEmployees().subscribe((res) => {
      this.chartData = res;
      if (!this.chartData) return;
      for (let i = 0; i < this.chartData.length; i++) {
        let data = this.chartData[i];
        this.labelData.push(data.firstName + data.lastName);
        this.realData.push(data.salary);
      }
      this.renderChart(this.labelData, this.realData, 'bar', 'barchart');
      this.renderChart(this.labelData, this.realData, 'pie', 'piechart');
      this.renderChart(this.labelData, this.realData, 'doughnut', 'dochart');
    });
  }

  renderChart(labelData: any, realData: any, type: any, id: any) {
    return new Chart(id, {
      type: type,
      data: {
        labels: labelData,
        datasets: [
          {
            label: '# of Salary',
            data: realData,
            backgroundColor: [
              'green',
              'blue',
              'orange',
              'yellow',
              'cyan',
              'pink',
              'red',
            ],
          },
        ],
      },
    });
  }
}
