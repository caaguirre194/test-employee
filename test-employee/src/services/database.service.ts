import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../../server/models/employee';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee('', '', '', '', '', '', '', '');
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  postPosts(post: Post) {
    return this.http.post(this.URL_API, post);
  }
}
