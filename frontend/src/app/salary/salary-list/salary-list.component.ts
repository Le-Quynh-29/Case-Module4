import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit {
salaries!: any
number: number = 1
  constructor(
    private salaryService: SalaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.salaryService.getSalaryList().subscribe(
      data=>{
        this.salaries = data
      },error=>{
        console.log(error)
      }
    )
  }
}
