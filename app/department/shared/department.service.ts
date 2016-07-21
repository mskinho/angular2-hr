import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import { DEPARTMENTS } from './mock-departments';
import { Department } from './department';

@Injectable()
export class DepartmentService {
	
	private departmentsUrl = 'app/departments'; // URL to web api

    constructor(private http: Http) { }
    
    getDepartment(): Promise<Department[]>{
    	return this.http.get(this.departmentsUrl)
    			.toPromise()
    			.then(response => response.json().data)
    			.catch(this.handleError);
    }

    save(department: Department): Promise<Department>{
          
        if(department.id) {
          return this.put(department);
        }
        return this.post(department);
    }

    delete(department: Department){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.departmentsUrl}/${department.id}`;

        return this.http
                   .delete(url, headers)
                   .toPromise()
                   .catch(this.handleError);
    }

    // update department
    private put(department: Department): Promise<Department>{
         let headers = new Headers({
              'Content-Type': 'application/json'});

         let url = `${this.departmentsUrl}/${department.id}`;

         return this.http
                    .put(url, 
                          JSON.stringify(department),
                          {headers : headers})
                    .toPromise()
                    .then(() => department)
                    .catch(this.handleError);
    }

    // insert department
    private post(department: Department): Promise<Department>{
         let headers = new Headers({
              'Content-Type': 'application/json'});
        
        return this.http
                   .post(this.departmentsUrl, 
                         JSON.stringify(department), 
                         {headers : headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }

    private handleError(error: any){
    	console.error('An error occured', error);
    	return Promise.reject(error.message || error);
    }

}