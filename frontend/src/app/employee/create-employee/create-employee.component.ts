import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
employee!: any
  constructor(
    private service: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employee = new Employee
  }

  addEmployee(){
    this.service.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['employees']);
        this.employee = new Employee();
      },error =>{
        console.log("Loi:");
        console.log(error);
      }
    )
}

}
