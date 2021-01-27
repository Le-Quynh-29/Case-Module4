import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionService } from 'src/app/position/position.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employees!:any;
id!: any;
  position!: any;

  
  constructor(
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private router :Router
  ) { }

  ngOnInit(): void {
   this.loadData();
   
   this.positionService.getPositionList().subscribe(
     data =>{
       this.position = data
     },error =>{
       console.log(error)
     }
   )
  }
  loadData() {
    this.employeeService.getEmployeeList().subscribe(
      data=>{
        this.employees = data
      },error=>{
        console.log(error);
      }
    )
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      data =>{
        this.loadData();
      },error =>{
        console.log(error);
      }
    )
  }



}
