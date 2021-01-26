import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
employee!: any
  id!: any;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private service: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getEmployee(this.id).subscribe(
      data =>{
        this.employee = data;
        console.log(this.employee);
      },error => {
        console.log(error);
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
