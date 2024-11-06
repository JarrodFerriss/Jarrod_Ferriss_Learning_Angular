import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceMarineService } from '../services/space-marine.service';
import { Router } from '@angular/router';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SpaceMarineListItemComponent} from "../space-marine-list-item/space-marine-list-item.component";

@Component({
  selector: 'app-space-marine-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SpaceMarineListItemComponent,
    NgIf
  ],
  templateUrl: './space-marine-list.component.html',
  styleUrls: ['./space-marine-list.component.css']
})
export class SpaceMarineListComponent implements OnInit {

  @Output() marineSelected = new EventEmitter<any>();
  spaceMarines: any[] = [];
  errorMessage: string | null = null;

  constructor(private spaceMarineService: SpaceMarineService, private router: Router) {}

  ngOnInit(): void {
    // Fetch Space Marines via HTTP
    this.spaceMarineService.getSpaceMarines().subscribe({
      next: (data: any[]) => {
        this.spaceMarines = data;
        this.errorMessage = null; // Clear error on success
      },
      error: (err) => {
        console.error('Error fetching Space Marines', err);
        this.errorMessage = 'Failed to fetch Space Marines. Please try again later.';
      }
    });
  }

  onSelectMarine(marine: any): void {
    this.spaceMarineService.selectMarine(marine);
  }

  onEditMarine(marine: any): void {
    this.spaceMarineService.selectMarine(marine);
    this.router.navigate(['/modify-list-item']);
  }

  onDeleteMarine(id: number): void {
    this.spaceMarineService.deleteSpaceMarine(id).subscribe({
      next: () => {
        this.spaceMarines = this.spaceMarines.filter(m => m.id !== id);
        this.errorMessage = null; // Clear error on success
      },
      error: (err) => {
        console.error('Error deleting Space Marine', err);
        this.errorMessage = 'Failed to delete Space Marine. Please try again later.';
      }
    });
  }
}
