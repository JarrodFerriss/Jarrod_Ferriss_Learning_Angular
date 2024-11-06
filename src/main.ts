import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SpaceMarineListComponent } from './app/space-marine-list/space-marine-list.component';
import { SpaceMarineListItemComponent } from './app/space-marine-list-item/space-marine-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/space-marines', pathMatch: 'full' },
  { path: 'space-marines', component: SpaceMarineListComponent },
  { path: 'space-marines/:id', component: SpaceMarineListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

// Set up routing and bootstrap the application with HTTP and in-memory web API
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Configures HTTP client with interceptors
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Simulate a server with a delay
  ]
}).catch((err) => console.error(err));
