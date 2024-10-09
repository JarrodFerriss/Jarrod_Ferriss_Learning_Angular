import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { SpaceMarineService } from './services/space-marine.service';  // Import the service
import { SpaceMarineListItemComponent } from './space-marine-list-item/space-marine-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpaceMarineListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Jarrod-Ferriss-Learning-Angular';

  // Variable to hold the featured space marine data
  featuredMarine: any;

  // Injecting the SpaceMarineService using dependency injection
  constructor(private spaceMarineService: SpaceMarineService) {}

  ngOnInit(): void {
    // Set a predefined featured marine (e.g., Marine with ID 2)
    const predefinedMarineId = 2;

    // Fetch the predefined marine by ID and set it as the initial featured marine
    this.spaceMarineService.getSpaceMarineById(predefinedMarineId).subscribe({
      next: (marine) => {
        this.featuredMarine = marine;
        console.log('Predefined Featured Marine:', this.featuredMarine);
      },
      error: (err) => console.error('Error fetching predefined Space Marine by ID', err),
      complete: () => console.log('Predefined Marine fetch complete')
    });

    // Subscribe to the selectedMarine$ observable to update the featured marine dynamically
    this.spaceMarineService.selectedMarine$.subscribe({
      next: (marine) => {
        if (marine) {
          this.featuredMarine = marine;  // Update with newly selected marine
          console.log('Featured Marine updated by selection:', this.featuredMarine);
        }
      }
    });
  }

  // Method to update the featured marine when a new one is selected
  updateFeaturedMarine(marine: any): void {
    this.featuredMarine = marine;
  }
}
