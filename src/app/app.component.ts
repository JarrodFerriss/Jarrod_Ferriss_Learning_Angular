import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

}
