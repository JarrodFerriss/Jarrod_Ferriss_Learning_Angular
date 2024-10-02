import { Component } from '@angular/core';
import { SpaceMarineListItemComponent } from '../space-marine-list-item/space-marine-list-item.component';
import { NgClass, NgForOf } from "@angular/common";
import { spaceMarines } from '../data/mock-contents';

@Component({
  selector: 'app-space-marine-list',
  standalone: true,
  imports: [SpaceMarineListItemComponent, NgForOf, NgClass],
  templateUrl: './space-marine-list.component.html',
  styleUrls: ['./space-marine-list.component.css']
})

export class SpaceMarineListComponent {

  // Reference to the imported array of Space Marines
  spaceMarines = spaceMarines;

}
