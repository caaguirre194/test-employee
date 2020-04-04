import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../server/models/employee';
import { DatabaseService } from '../../services/database.service';
import { ApiTestService } from '../../services/api-test.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  employee: Employee;
  employees = [];

  constructor(private database: DatabaseService, private api: ApiTestService) {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  guardarEmpleado() {
    //this.database.postEmployee(this.employee).subscribe((res) => {});
    this.employees.push(this.employee as Employee);
    this.employee = new Employee('', '', '', '', '', '', '', '');
    console.log(this.employees);
    for (let emp of this.employees) {
      console.log(emp);
    }
  }

  registrarPosts() {
    console.log(this.api.getPosts());
  }
}
