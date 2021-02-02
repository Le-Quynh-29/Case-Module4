import { SalaryService } from './../../salary/salary.service';
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
  salary!: any;
  keywork!: any;

  
  constructor(
    private employeeService: EmployeeService,
    private salaryService: SalaryService,
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
        console.log(error);
      }
    )
    this.salaryService.getSalaryList().subscribe(
      data=>{
        this.salary=data
      },error=>{
        console.log(error)
      }
    )
  }

  deleteEmployee(id: number){
    if(window.confirm('Bạn có chắc chắn muốn xóa ?')){
      this.employeeService.deleteEmployee(id).subscribe(
        data =>{
          this.loadData();
        },error =>{
          console.log(error);
        }
      )
      this.salaryService.deleteSalary(id).subscribe(
        data=>{
          this.loadData();
        },error=>{
          console.log(error);
        }
      )
    }
  }

search(){
  this.employeeService.getSearch(this.keywork,this.employees).subscribe(
    data=>{
      this.employees = data
    },error=>{
      console.log(error);
    }
  )
}

}
