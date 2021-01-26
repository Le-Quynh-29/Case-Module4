import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';

const routes: Routes = [

  {
    path:"salary",
    component: SalaryListComponent
  },
  {
    path:'employees',
  component:EmployeeListComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
