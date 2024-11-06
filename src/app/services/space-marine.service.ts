import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceMarineService {
  private apiUrl = 'api/spaceMarines'; // URL to web API

  // BehaviorSubject to track the selected marine
  private selectedMarineSubject = new BehaviorSubject<any>(null);
  selectedMarine$ = this.selectedMarineSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Get all Space Marines
  getSpaceMarines(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get Space Marine by ID
  getSpaceMarineById(id: number): Observable<any | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Select a Space Marine
  selectMarine(marine: any): void {
    this.selectedMarineSubject.next(marine);
  }

  // Add a new Space Marine
  addSpaceMarine(newMarine: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newMarine);
  }

  // Update an existing Space Marine
  updateSpaceMarine(updatedMarine: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedMarine.id}`;
    return this.http.put<any>(url, updatedMarine);
  }

  // Delete a Space Marine by ID
  deleteSpaceMarine(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
