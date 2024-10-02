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

  // Read method: Accepts a number and returns the IContent item with the same id
  getSpaceMarineById(id: number): Observable<any | undefined> {
    const marine = spaceMarines.find(m => m.id === id);  // Finding the marine by id
    return of(marine);  // Returning the found marine as an Observable
  }

  // Create method: Accepts an IContent item, adds it to the array, and returns the updated array
  addSpaceMarine(newMarine: any): Observable<any[]> {
    spaceMarines.push(newMarine);  // Adding the new marine to the array
    return of(spaceMarines);  // Returning the updated array as an Observable
  }

  // Update method: Accepts an IContent item, updates the marine with the same id, and returns the updated array
  updateSpaceMarine(updatedMarine: any): Observable<any[]> {
    const index = spaceMarines.findIndex(m => m.id === updatedMarine.id);  // Finding the marine by id
    if (index !== -1) {
      spaceMarines[index] = updatedMarine;  // Updating the marine in the array
    }
    return of(spaceMarines);  // Returning the updated array as an Observable
  }

  // Delete method: Accepts a number, removes the marine with the same id, and returns the removed item
  deleteSpaceMarine(id: number): Observable<any | undefined> {
    const index = spaceMarines.findIndex(m => m.id === id);  // Finding the marine by id
    let removedMarine;
    if (index !== -1) {
      removedMarine = spaceMarines.splice(index, 1)[0];  // Removing the marine from the array
    }
    return of(removedMarine);  // Returning the removed marine as an Observable
  }
}
