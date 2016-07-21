import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_TOOLBAR_DIRECTIVES  } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'; 

import { DepartmentService } from './department/shared/department.service';
import { EmployeeService } from './employee/shared/employee.service';

@Component({
    selector: 'simplehr-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,
        MD_BUTTON_DIRECTIVES, 
        MD_TOOLBAR_DIRECTIVES, 
        MdIcon, 
        MD_SIDENAV_DIRECTIVES, 
        MD_LIST_DIRECTIVES,
        MD_CARD_DIRECTIVES],
    providers: [
        MdIconRegistry,
        DepartmentService,
        EmployeeService,
    ]
})
export class AppComponent implements OnInit {
    constructor() { }
    
    ngOnInit() {
    }
}

