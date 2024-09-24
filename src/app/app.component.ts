import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SpaceMarine} from "./Shared/Factions/SpaceMarine";
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {SpaceMarineListComponent} from "./space-marine-list/space-marine-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, NgOptimizedImage, NgIf, SpaceMarineListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'Jarrod-Ferriss-Learning-Angular';

  spaceMarines: SpaceMarine[] = [

    {name: "Uriel Ventris", yearBorn: 876, rank: "Captain", chapter: "Ultramarines", isFallen: false},
    {name: "Azrael", yearBorn: 843, rank: "Supreme Grand Master", chapter: "Dark Angels", isFallen: false},
    {name: "Lt. Daniels", yearBorn: 3056, rank: "Admiral", chapter: "7th Chapter", isFallen: true},
    {name: "Logan Grimnar", yearBorn: 313, rank: "Great Wolf", chapter: "Space Wolves", isFallen: false},
    {name: "Torias Telion", yearBorn: 732, rank: "Sergeant", chapter: "Ultramarines", isFallen: false},
    {name: "Dante", yearBorn: 231, rank: "Chapter Master", chapter: "Blood Angels", isFallen: false},
    {name: "Adrax Agatone", yearBorn: 497, rank: "Captain", chapter: "Salamanders", isFallen: false}

  ];

}
