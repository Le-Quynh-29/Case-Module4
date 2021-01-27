import { PositionService } from './../../position/position.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Position } from 'src/app/position/position';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  [x: string]: any;
employee!: any;
id!:number;
srcImg!: string;
selectedFile: null = null;
fb: any;
  downloadURL!: Observable<string>;
  constructor(
    private service: EmployeeService,
    private router: Router,
    private positionService: PositionService,
    
  ) { }
positionList: Position[] = []
  ngOnInit(): void {
    this.employee = new Employee();
    this.getPosition();
  }

  addEmployee(){
    console.log(this.employee);
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

  getPosition(){
    this.positionService.getPositionList().subscribe(
      data =>{
        this.positions = data
      },error =>{
        console.log(error);
      }
    )
      
  }

  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
            }
            this.srcImg = url;
            console.log(this.fb);
          });
        })
      )
      .subscribe((url: any) => {
        if (url) {

          // console.log(url);
        }
      });
  }

}
