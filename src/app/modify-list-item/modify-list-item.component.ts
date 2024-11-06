import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SpaceMarineService} from '../services/space-marine.service'; // Importing the service
import {Router} from '@angular/router'; // Import Router if needed for navigation
import {map} from 'rxjs/operators';
import {NgIf} from "@angular/common";
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  marineForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private spaceMarineService: SpaceMarineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marineForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      rank: ['', Validators.required],
      yearBorn: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      chapter: ['', Validators.required],
      isFallen: [false]
    });

    this.spaceMarineService.selectedMarine$.subscribe((marine) => {
      if (marine) {
        this.marineForm.patchValue(marine);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.marineForm.valid) {
      const marineData = this.marineForm.value;

      if (marineData.id) {
        try {
          const existingMarine = await firstValueFrom(this.spaceMarineService.getSpaceMarineById(marineData.id));
          if (existingMarine) {
            marineData.imageUrl = existingMarine.imageUrl;
          }
          this.spaceMarineService.updateSpaceMarine(marineData).subscribe({
            next: () => {
              this.resetForm();
              this.router.navigate(['/space-marines']);
              this.errorMessage = null;
            },
            error: (err) => {
              console.error('Error updating marine:', err);
              this.errorMessage = 'Failed to update Space Marine. Please try again.';
            }
          });
        } catch (error) {
          console.error('Error fetching marine for update:', error);
          this.errorMessage = 'Failed to fetch marine data for update.';
        }
      } else {
        marineData.id = await this.generateNewId();
        marineData.imageUrl = 'assets/images/space_marine.jpg';

        this.spaceMarineService.addSpaceMarine(marineData).subscribe({
          next: () => {
            this.resetForm();
            this.router.navigate(['/space-marines']);
            this.errorMessage = null;
          },
          error: (err) => {
            console.error('Error adding marine:', err);
            this.errorMessage = 'Failed to add Space Marine. Please try again.';
          }
        });
      }
    } else {
      this.errorMessage = 'Form is invalid. Please fill out all required fields.';
    }
  }

  resetForm(): void {
    this.marineForm.reset({
      id: null,
      name: '',
      rank: '',
      yearBorn: '',
      chapter: '',
      isFallen: false
    });
  }

  // Helper method to generate a new ID
  private async generateNewId(): Promise<number> {
    let newId = 1;  // Default new ID if there are no marines

    // Get all space marines and find the maximum ID
    const ids = await firstValueFrom(
      this.spaceMarineService.getSpaceMarines().pipe(
        map((marines: any[]) => marines.map((marine: any) => marine.id))
      )
    );

    if (ids.length > 0) {
      newId = Math.max(...ids) + 1; // Set new ID to max ID + 1
    }

    return newId;
  }
}
