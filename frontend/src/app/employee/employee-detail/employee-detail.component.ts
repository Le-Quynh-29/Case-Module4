import { SalaryService } from './../../salary/salary.service';
import { Salary } from './../../salary/salary';
import { PositionService } from './../../position/position.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  id!: any;
  employee!: any;
  salaries!: any;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private salaryService: SalaryService,
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.loadData();
  }

  loadData(){
    
    this.employeeService.getEmployeeDetail(this.id).subscribe(
      data=>{
        this.employee = data
        console.log(data)
      },error=>{
        console.log(error);
      }
    )
    

  }

}
