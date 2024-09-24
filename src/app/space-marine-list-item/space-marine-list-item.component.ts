// space-marine-list-item.component.ts
import { Component, Input } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-space-marine-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './space-marine-list-item.component.html',
  styleUrls: ['./space-marine-list-item.component.css']
})
export class SpaceMarineListItemComponent {
  @Input() spaceMarine: any;
}
