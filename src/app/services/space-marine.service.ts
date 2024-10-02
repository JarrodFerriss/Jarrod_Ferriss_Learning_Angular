import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Importing Observable and of
import { spaceMarines } from '../data/mock-contents';  // Correct path to the spaceMarines data

@Injectable({
  providedIn: 'root'
})
export class SpaceMarineService {

  constructor() { }

  // Method to return the spaceMarines array as an Observable
  getSpaceMarines(): Observable<any[]> {
    return of(spaceMarines);  // Using the 'of' operator to return an Observable
  }
}
