import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  // Define the marineForm property
  marineForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with controls
    this.marineForm = this.fb.group({
      id: [null],  // Optional field for updating an existing marine
      name: ['', Validators.required],
      rank: ['', Validators.required],
      yearBorn: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Numeric validation
      chapter: ['', Validators.required],
      isFallen: [false],
      imageUrl: ['']
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.marineForm.valid) {
      const marineData = this.marineForm.value;
      console.log('Form Submitted:', marineData);
      // Add or update logic goes here
    } else {
      console.error('Form is invalid');
    }
  }
}
