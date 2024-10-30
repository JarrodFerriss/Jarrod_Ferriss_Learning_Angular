import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceMarineListItemComponent } from '../space-marine-list-item/space-marine-list-item.component';
import { NgClass, NgForOf } from "@angular/common";
import { SpaceMarineService } from '../services/space-marine.service';  // Import the service
import { Router } from '@angular/router'; // Import Router if using routing

@Component({
  selector: 'app-space-marine-list',
  standalone: true,
  imports: [SpaceMarineListItemComponent, NgForOf, NgClass],
  templateUrl: './space-marine-list.component.html',
  styleUrls: ['./space-marine-list.component.css']
})
export class SpaceMarineListComponent implements OnInit {

  @Output() marineSelected = new EventEmitter<any>();  // Output event to emit the selected marine
  spaceMarines: any[] = [];  // Property to store Space Marines data

  constructor(private spaceMarineService: SpaceMarineService, private router: Router) {} // Inject Router if using routing

  ngOnInit(): void {
    this.spaceMarineService.getSpaceMarines().subscribe({
      next: (data: any[]) => {
        this.spaceMarines = data;
        console.log('Space Marines fetched:', this.spaceMarines);
      },
      error: (err) => console.error('Error fetching Space Marines', err),
      complete: () => console.log('Space Marine data fetch complete')
    });
  }

  // Method to select a marine and notify the service
  onSelectMarine(marine: any): void {
    this.spaceMarineService.selectMarine(marine);  // Set the selected marine in the service
  }

  // Method to edit a selected marine (redirects to the form)
  onEditMarine(marine: any): void {
    this.spaceMarineService.selectMarine(marine); // Set selected marine in the service
    this.router.navigate(['/modify-list-item']); // Redirect to the form (adjust route if necessary)
  }

  // Method to delete a selected marine by ID
  onDeleteMarine(id: number): void {
    this.spaceMarineService.deleteSpaceMarine(id).subscribe({
      next: (deleted) => {
        console.log('Deleted marine:', deleted);
        // Refresh the list by fetching space marines again
        this.spaceMarineService.getSpaceMarines().subscribe((data) => {
          this.spaceMarines = data;
        });
      },
      error: (err) => console.error('Error deleting Space Marine', err)
    });
  }
}
