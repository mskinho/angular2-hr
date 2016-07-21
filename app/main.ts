// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms'

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// enableProdMode();

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService },      // in-mem server data
    disableDeprecatedForms(),
  	provideForms(),
])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
