import { PositionService } from './../../position/position.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { Position } from 'src/app/position/position';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  
employee!: any
  id!: any;
  positions!: any;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private service: EmployeeService,
    private positionService: PositionService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = this.service.getEmployee(this.id);

    this.positionService.getPositionList().subscribe(
      data =>{
        this.positions = data
      },error=> {
        console.log(error)
      }
    )
  }

  editEmployee(){
    this.service.updataEmployee(this.employee,this.id).subscribe(
      data =>{
        this.router.navigate(['employees'])
      },error => {
        console.log(error)
      }
    )
  }

 

}
