import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Employee } from '../employee/shared/employee';
import { EmployeeService } from '../employee/shared/employee.service';
import { Department } from './shared/department';
import { DepartmentService } from './shared/department.service';

@Component({
	selector: 'app-departmentEmployees',
	templateUrl: 'app/department/departmentEmployees.component.html',
	directives : [ MD_CARD_DIRECTIVES ],
})
export class DepartmentEmployeesComponent implements OnInit {
	constructor(private employeeService: EmployeeService,
				private route: ActivatedRoute) {}

	filteredEmployees: Employee[];
	error: any;
	sub: any;

	getEmpOfDep(){
		this.sub = this.route.params.subscribe(params => {
        	if (params['id'] !== undefined) {
        		let departmentId = +params['id'];
        		this.employeeService
        			.getEmpOfDep(departmentId)
        			.then(employees => this.filteredEmployees = employees)
        			.catch(this.error);
        	}
        })
    }

	ngOnInit() {
		this.getEmpOfDep();
	}
}
	