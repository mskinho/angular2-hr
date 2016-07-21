import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentEmployeesComponent } from './department/departmentEmployees.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'employees', component: EmployeeComponent},
  { path: 'departments/:id/employees', component: DepartmentEmployeesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];