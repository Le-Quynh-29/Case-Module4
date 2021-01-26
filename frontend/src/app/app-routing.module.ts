import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [

  {
    path:"salary",
    component: SalaryListComponent
  },
  {
    path:'employees',
  component:EmployeeListComponent
  },
  {path:'add',component:CreateEmployeeComponent},

  {path:'employees/edit/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
