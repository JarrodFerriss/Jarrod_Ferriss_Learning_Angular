import { Component } from '@angular/core';
import { SpaceMarineListItemComponent } from '../space-marine-list-item/space-marine-list-item.component';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-space-marine-list',
  standalone: true,
  imports: [SpaceMarineListItemComponent, NgForOf, NgClass],
  templateUrl: './space-marine-list.component.html',
  styleUrls: ['./space-marine-list.component.css']
})

export class SpaceMarineListComponent {

  //Array of Space Marines
  spaceMarines = [
    {
      name: 'Marneus Calgar',
      rank: 'Chapter Master',
      yearBorn: '541',
      chapter: 'Ultramarines',
      isFallen: false
    },
    {
      name: 'Gabriel Angelos',
      rank: 'Captain',
      yearBorn: '539',
      chapter: 'Blood Ravens',
      isFallen: false
    },
    {
      name: 'Discarius Hurn',
      rank: 'Sergent',
      yearBorn: '654',
      chapter: 'Salamanders',
      isFallen: true
    },
    {
      name: 'Cato Sicarius',
      rank: 'Captain',
      yearBorn: '540',
      chapter: 'Ultramarines',
      isFallen: false
    },
    {
      name: 'Azrael',
      rank: 'Supreme Grand Master',
      yearBorn: '541',
      chapter: 'Dark Angels',
      isFallen: false
    }
  ];
}
