import { Component, OnInit } from '@angular/core';
import { SpaceMarineListItemComponent } from '../space-marine-list-item/space-marine-list-item.component';
import { NgClass, NgForOf } from "@angular/common";
import { SpaceMarineService } from '../services/space-marine.service';  // Import the service

@Component({
  selector: 'app-space-marine-list',
  standalone: true,
  imports: [SpaceMarineListItemComponent, NgForOf, NgClass],
  templateUrl: './space-marine-list.component.html',
  styleUrls: ['./space-marine-list.component.css']
})

export class SpaceMarineListComponent implements OnInit {

  spaceMarines: any[] = [];  // Property to store Space Marines data

  // Injecting the SpaceMarineService using dependency injection
  constructor(private spaceMarineService: SpaceMarineService) {}

  // OnInit lifecycle hook to fetch data from the service
  ngOnInit(): void {
    this.spaceMarineService.getSpaceMarines().subscribe({
      next: (data: any[]) => {
        this.spaceMarines = data;
        console.log('Space Marines fetched:', this.spaceMarines);  // Logging the fetched data
      },
      error: (err) => console.error('Error fetching Space Marines', err),  // Logging error if any
      complete: () => console.log('Space Marine data fetch complete')  // Logging when fetch is complete
    });
  }
}
