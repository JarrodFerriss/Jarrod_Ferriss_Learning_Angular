import { Component, Input } from '@angular/core';
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-space-marine-list-item',
  standalone: true,
  templateUrl: './space-marine-list-item.component.html',
  imports: [
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe
  ],
  styleUrls: ['./space-marine-list-item.component.css']
})
export class SpaceMarineListItemComponent {
  @Input() spaceMarine: any;
}
