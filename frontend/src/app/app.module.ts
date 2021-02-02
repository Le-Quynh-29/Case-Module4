import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import {
  AngularFireStorageModule,

} from "@angular/fire/storage";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PositionListComponent } from './position/position-list/position-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SalaryListComponent } from './salary/salary-list/salary-list.component';
import { FormsModule } from '@angular/forms';
import { CreateSalaryComponent } from './salary/create-salary/create-salary.component';
import { UpdateSalaryComponent } from './salary/update-salary/update-salary.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PositionListComponent,
    CreateEmployeeComponent,
    SalaryListComponent,
    CreateSalaryComponent,
    CreateSalaryComponent,
    UpdateSalaryComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }