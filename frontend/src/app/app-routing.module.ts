import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';
import { CreateSalaryComponent } from './salary/create-salary/create-salary.component';
import { UpdateSalaryComponent } from './salary/update-salary/update-salary.component';

const routes: Routes = [

  {
    path:"salary",
    component: SalaryListComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
},
{
  path: 'salary/create',
  component: CreateSalaryComponent
},
{
  path: 'salary/update/:id',
  component: UpdateSalaryComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
