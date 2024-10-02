import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceMarineListComponent } from './space-marine-list/space-marine-list.component';
import { SpaceMarineListItemComponent } from './space-marine-list-item/space-marine-list-item.component';
import { JsonPipe, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { SpaceMarineService } from './services/space-marine.service';  // Import the service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpaceMarineListComponent, SpaceMarineListItemComponent, NgForOf, JsonPipe, NgOptimizedImage, NgIf],
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
    const marineId = 2;  // ID of the marine you want to retrieve (e.g., Gabriel Angelos)

    // Fetch the space marine by ID and assign it to the featuredMarine variable
    this.spaceMarineService.getSpaceMarineById(marineId).subscribe({
      next: (marine) => {
        this.featuredMarine = marine;
        console.log('Featured Marine fetched by ID:', this.featuredMarine);
      },
      error: (err) => console.error('Error fetching Space Marine by ID', err),
      complete: () => console.log('Space Marine data fetch by ID complete')
    });
  }

  // Method to update the featured marine when a new one is selected
  updateFeaturedMarine(marine: any): void {
    this.featuredMarine = marine;
  }
}
