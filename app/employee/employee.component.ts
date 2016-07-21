import { Component, OnInit } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Employee } from './shared/employee';
import { EmployeeService } from './shared/employee.service';

@Component({
	selector: 'app-employee',
	templateUrl: 'app/employee/employee.component.html',
	directives : [ MD_CARD_DIRECTIVES ]
})
export class EmployeeComponent implements OnInit {
	constructor(private employeeService : EmployeeService) {}

	employees: Employee[];
	error : any;

	getEmployees(){
		this.employeeService
			.getEmployees()
			.then(employees => this.employees = employees)
			.catch(this.error);
	}
	
	ngOnInit() {
		this.getEmployees();
	}
}