import { Component, Input } from '@angular/core';
import { NgClass, NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-space-marine-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './space-marine-list-item.component.html',
  styleUrls: ['./space-marine-list-item.component.css']
})
export class SpaceMarineListItemComponent {
  @Input() spaceMarine: any;  // Make sure @Input is named "spaceMarine"
}
