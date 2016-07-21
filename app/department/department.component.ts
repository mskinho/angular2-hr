import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Router } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_GRID_LIST_DIRECTIVES  } from '@angular2-material/grid-list' 
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import { Department } from './shared/department';
import { DepartmentService } from './shared/department.service';

@Component({
    selector: 'app-department',
    templateUrl: 'app/department/department.component.html',
    directives: [ 
        FORM_DIRECTIVES,
        MD_BUTTON_DIRECTIVES, 
        MdIcon, 
        MD_GRID_LIST_DIRECTIVES, 
        MD_CARD_DIRECTIVES,
        MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class DepartmentComponent implements OnInit {
    constructor(private departmentService: DepartmentService,
                private router: Router) { }

    @Input() department: Department;
    @Output() close = new EventEmitter();
    departments: Department[];
    selectedDepartment: Department;
    formShowing: boolean = false;
    error: any;
    formTitle : string = "";

    private InitialDepartment(){
        this.department = new Department();
    }

    getDepartments(){
        this.departmentService
            .getDepartment()
            .then(departments => this.departments = departments)
            .catch(error => this.error = error);
    }

    getDetail(department: Department){

        this.formTitle = "Edit Department";

        this.selectedDepartment = department;
        this.formShowing = true;
        this.department = this.selectedDepartment;
    }

    goToEmpOfDep(department: Department){
        this.selectedDepartment = department;
        this.router.navigate(['/departments', this.selectedDepartment.id, '/employees']);
    }

    save(){ this.departmentService
            .save(this.department)           
            .then(department => {
                this.department = department;
                this.ngOnInit();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    deleteDepartment(department: Department){
        this.departmentService
            .delete(department)
            .then(res => {
                this.departments = this.departments
                .filter(m => m !== department);
                if (this.selectedDepartment === department){
                    this.selectedDepartment = null
                    this.ngOnInit();
                }
            })
    }

    closeForm(){
        this.formShowing = false;
        this.InitialDepartment();
        this.formTitle = "Create Department";
    }

    ngOnInit() {
        this.InitialDepartment();
        this.getDepartments();
        this.formShowing = false; // close form after saved
        this.formTitle = "Create Department";
    }
}