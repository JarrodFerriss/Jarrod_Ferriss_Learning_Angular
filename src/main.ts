import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SpaceMarineListComponent } from './app/space-marine-list/space-marine-list.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { FullNameWithRankPipe } from "./app/customPipe/full-name-with-rank.pipe";

const routes: Routes = [
  // Eager load the default route
  { path: '', redirectTo: '/space-marines', pathMatch: 'full' },
  { path: 'space-marines', component: SpaceMarineListComponent },

  // Lazy load these routes
  {
    path: 'space-marines/:id',
    loadComponent: () =>
      import('./app/space-marine-list-item/space-marine-list-item.component').then(
        m => m.SpaceMarineListItemComponent
      )
  },
  {
    path: 'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(
        m => m.ModifyListItemComponent
      )
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        m => m.PageNotFoundComponent
      )
  }
];

// Set up routing and bootstrap the application with HTTP and in-memory web API
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Configures HTTP client with interceptors
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })), // Simulate a server with a delay
    FullNameWithRankPipe
  ]
}).catch((err) => console.error(err));
