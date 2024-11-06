import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { spaceMarines } from '../data/mock-contents';  // Import your mock data

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // Simulate a database with spaceMarines data
  createDb() {
    return { spaceMarines };
  }

  // Optional: Customize ID generation to ensure unique IDs for new space marines
  genId(spaceMarines: any[]): number {
    return spaceMarines.length > 0 ? Math.max(...spaceMarines.map(marine => marine.id)) + 1 : 1;
  }

  // Override POST to add a new space marine
  post(requestInfo: RequestInfo) {
    const newMarine = requestInfo.utils.getJsonBody(requestInfo.req);  // Parse the new item from the request body
    newMarine.id = this.genId(spaceMarines);  // Assign a new unique ID
    spaceMarines.push(newMarine);  // Add new entry to the array

    return requestInfo.utils.createResponse$(() => ({
      body: newMarine,
      status: 201
    }));
  }

  // Override PUT to update an existing space marine by ID
  put(requestInfo: RequestInfo) {
    const updatedMarine = requestInfo.utils.getJsonBody(requestInfo.req);  // Parse updated data
    const id = parseInt(requestInfo.id as string, 10);  // Get ID from request
    const index = spaceMarines.findIndex(marine => marine.id === id);

    if (index !== -1) {
      spaceMarines[index] = updatedMarine;  // Update existing entry
    }

    return requestInfo.utils.createResponse$(() => ({
      body: updatedMarine,
      status: 200
    }));
  }

  // Override DELETE to remove a space marine by ID
  delete(requestInfo: RequestInfo) {
    const id = parseInt(requestInfo.id as string, 10);
    const index = spaceMarines.findIndex(marine => marine.id === id);

    if (index !== -1) {
      spaceMarines.splice(index, 1);  // Remove entry from array
    }

    return requestInfo.utils.createResponse$(() => ({
      status: 204  // No content response
    }));
  }
}
