import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()	
export class EmployeeService {

	private employeesUrl = 'app/employees';
	
	employees: Employee[];


	constructor(private http: Http) {}

	getEmployees(): Promise<Employee[]>{
		return this.http.get(this.employeesUrl)
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	getEmpOfDep(departmentId: number): Promise<Employee[]>{
		
		return this.http.get(this.employeesUrl)
		.toPromise()
		.then(res => {
			this.employees = res.json().data;
			return this.employees.filter(employee => employee.departmentId == departmentId);
		})
		.catch(this.handleError);
			
		// .then(res => {
		// 	let items =res.json().data;
		// 	return items.filter(function(items: any){return item.departmentId==departmentId;});
		// })		
	}

	private handleError(error: any){
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}
	