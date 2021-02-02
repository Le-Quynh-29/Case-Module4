import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.scss']
})
export class UpdateSalaryComponent implements OnInit {

  salary!: any;
  id!: any;
  employees!: Employee[];
  constructor(private route: ActivatedRoute,
    private router:Router,
    private salaryService: SalaryService,
    private employeeService: EmployeeService
    ) { }
  ngOnInit(): void {
    this.salary = new Salary();
    this.id = this.route.snapshot.params['id'];
    this.salaryService.getSalary(this.id).subscribe(
      data =>{
        this.salary = data;
        console.log(this.salary);
      },error => {
        console.log(error);
      }
    )
    this.employeeService.getEmployeeList().subscribe(
      (data: any) =>{
        this.employees = data
      },error=> {
        console.log(error)
      }
    )
  }
  editSalary(){
    this.salaryService.updateSalary(this.id,this.salary).subscribe(
      data =>{
        console.log(data);
        this.salary = new Salary();
        this.router.navigate(['salary'])
      },error => {
        console.log(error)
      }
    )
  }
}
