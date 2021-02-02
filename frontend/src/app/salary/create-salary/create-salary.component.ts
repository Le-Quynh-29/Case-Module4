import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.scss']
})
export class CreateSalaryComponent implements OnInit {
  salary: Salary = new Salary();
  employees!:Employee[];
  constructor(
    private salaryService: SalaryService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.salary = new Salary();
    this.employeeService.getEmployeeList().subscribe(
      (data: any)=>{
        this.employees = data
      },error=>{
        console.log(error)
      }
    );
    // console.log(this.employeeService.getEmployeeList());
  }

  save() {
    console.log("Hello");
    console.log(this.salary);
    this.salaryService.createSalary(this.salary).subscribe(
      (data: any) => {
        console.log(data);
        this.salary = new Salary();
        this.gotoList();
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['salary']);
  }
}
