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
  // Define the marineForm property
  marineForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private spaceMarineService: SpaceMarineService, // Inject the service
    private router: Router // Inject Router if needed for navigation
  ) {}

  ngOnInit(): void {
    // Initialize the form with controls
    this.marineForm = this.fb.group({
      id: [null],  // Optional field for updating an existing marine
      name: ['', Validators.required],
      rank: ['', Validators.required],
      yearBorn: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Numeric validation
      chapter: ['', Validators.required],
      isFallen: [false]
    });

    // Subscribe to selected marine changes to populate the form if editing
    this.spaceMarineService.selectedMarine$.subscribe((marine) => {
      if (marine) {
        this.marineForm.patchValue(marine);  // Update form with selected marine details
      }
    });
  }

  // Method to handle form submission
  async onSubmit(): Promise<void> {
    if (this.marineForm.valid) {
      const marineData = this.marineForm.value;

      if (marineData.id) {
        // Update operation: Preserve the existing image URL if editing an existing marine
        const existingMarine = await firstValueFrom(this.spaceMarineService.getSpaceMarineById(marineData.id));
        if (existingMarine) {
          marineData.imageUrl = existingMarine.imageUrl; // Retain the existing image URL
        }

        this.spaceMarineService.updateSpaceMarine(marineData).subscribe((updatedMarines) => {
          console.log('Marine updated:', updatedMarines);
          this.resetForm();  // Reset the form after submission
          this.router.navigate(['/space-marines']);  // Redirect back to the list
        });
      } else {
        // Add operation - Generate a new ID for the new marine
        marineData.id = await this.generateNewId();
        // Set default image URL for new space marines
        marineData.imageUrl = 'assets/images/space_marine.jpg';

        this.spaceMarineService.addSpaceMarine(marineData).subscribe((updatedMarines) => {
          console.log('Marine added:', updatedMarines);
          this.resetForm();  // Reset the form after submission
          this.router.navigate(['/space-marines']);  // Redirect back to the list
        });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  // Method to reset the form
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
