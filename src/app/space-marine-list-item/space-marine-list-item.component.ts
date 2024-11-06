import { Component, Input } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-space-marine-list-item',
  standalone: true,
  templateUrl: './space-marine-list-item.component.html',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./space-marine-list-item.component.css']
})
export class SpaceMarineListItemComponent {
  @Input() spaceMarine: any;
}
