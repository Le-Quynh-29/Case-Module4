import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent } from './position/position-list/position-list.component';

import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';
import { PositionEditComponent } from './position/position-edit/position-edit.component';
import { PositionService } from './position/position.service';
import { PositionDetailComponent } from './position/position-detail/position-detail.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [

  {
    path: "salary",
    component: SalaryListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },

  {
    path: 'add',
    component: CreateEmployeeComponent
  },
  {
    path: 'positions',
    component: PositionListComponent
  },


  { path: 'employees/edit/:id', component: UpdateEmployeeComponent },

  {path: 'positions/update/:id',component:PositionEditComponent },
  {path:'positions/show/:id',component:PositionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
