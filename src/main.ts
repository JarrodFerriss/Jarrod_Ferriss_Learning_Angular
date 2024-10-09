import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SpaceMarineListComponent } from './app/space-marine-list/space-marine-list.component';
import { SpaceMarineListItemComponent } from './app/space-marine-list-item/space-marine-list-item.component';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/space-marines', pathMatch: 'full' }, // Default route
  { path: 'space-marines', component: SpaceMarineListComponent }, // List of space marines
  { path: 'space-marines/:id', component: SpaceMarineListItemComponent }, // Space marine detail view by ID
  { path: '**', component: SpaceMarineListComponent } // Fallback for unknown routes
];

// Set up routing and bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
