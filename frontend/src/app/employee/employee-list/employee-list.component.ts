import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employees!:any;
  constructor(
    private employeeService: EmployeeService,
    private router :Router
  ) { }

  ngOnInit(): void {
   this.loadData();
  }
  loadData() {
    this.employeeService.getEmployeeList().subscribe(
      data=>{
        this.employees = data
      },error=>{
        console.log(error)
      }
    )
  }



}