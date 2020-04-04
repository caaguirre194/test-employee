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
  posts: Post[];

  constructor(private database: DatabaseService, private api: ApiTestService) {
    this.employee = new Employee('', '', '', '', '', '', '', '');
    this.posts = [];
    this.employees = [];
  }

  ngOnInit(): void {
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  guardarEmpleado() {
    //this.database.postEmployee(this.employee).subscribe((res) => {});
    this.employees.push(this.employee);
    this.employee = new Employee('', '', '', '', '', '', '', '');
  }

  getPosts() {
    this.api.getPosts().subscribe((res) => {
      this.posts = res as Post[];
    });
  }

  registrarPosts() {
    console.log(this.posts);
    // se agrega primer post traido del API
    this.database.postPosts(this.posts[0]);
  }
}
