import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() marineSelected = new EventEmitter<any>();  // Output event to emit the selected marine
  spaceMarines: any[] = [];  // Property to store Space Marines data

  constructor(private spaceMarineService: SpaceMarineService) {}

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

  // Method to emit the selected marine
  onSelectMarine(marine: any): void {
    this.marineSelected.emit(marine);  // Emit the selected marine
  }
}
