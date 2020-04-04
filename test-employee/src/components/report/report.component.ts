import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../server/models/employee';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  employee: Employee;

  constructor(private database: DatabaseService) {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  guardarEmpleado() {
    this.database.postEmployee(this.employee);
  }
}
