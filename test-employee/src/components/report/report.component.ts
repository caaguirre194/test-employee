import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../server/models/employee';
import { DatabaseService } from '../../services/database.service';
import { ApiTestService } from '../../services/api-test.service';
import { Post } from '../../models/post';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  employee: Employee;
  employees: Employee[];

  constructor(private database: DatabaseService, private api: ApiTestService) {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  guardarEmpleado() {
    //this.database.postEmployee(this.employee).subscribe((res) => {});
    this.employees.push(this.employee);

    this.employee = new Employee('', '', '', '', '', '', '', '');
    console.log(this.employees);
    for (let emp of this.employees) {
      console.log(emp.documento);
    }
  }

  registrarPosts() {
    const lista = this.api.getPosts();
    console.log(lista);
    for (const post of lista) {
      this.database.postPosts(post);
    }
  }
}
