import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees: Employee[] = [
{
  id: 1,
  name: "Employee one",
  email: "EmployeeOne@Mail.com",
  phone: 1234
},
{
  id: 2,
  name: "Employee Two",
  email: "EmployeeTwo@Mail.com",
  phone: 5678
}
];
  constructor() { }

  onGet() {
    return this.employees;

  }

}
