import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { spaceMarines } from '../data/mock-contents';  // Import your mock data

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // Implement the createDb method to simulate a server response with spaceMarines data
  createDb() {
    return { spaceMarines };
  }
}
