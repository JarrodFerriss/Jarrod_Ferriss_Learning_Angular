import { TestBed } from '@angular/core/testing';
import { SpaceMarineService } from './space-marine.service';
import { spaceMarines } from '../data/mock-contents';

describe('SpaceMarineService', () => {
  let service: SpaceMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a space marine by ID', (done: DoneFn) => {
    service.getSpaceMarineById(2).subscribe((marine) => {
      expect(marine).toEqual(spaceMarines.find(m => m.id === 2));
      done();
    });
  });

  it('should add a new space marine', (done: DoneFn) => {
    const newMarine = { id: 6, name: 'New Marine', rank: 'Lieutenant', yearBorn: '600', chapter: 'Ultramarines', isFallen: false };
    service.addSpaceMarine(newMarine).subscribe((updatedMarines) => {
      expect(updatedMarines.length).toBe(spaceMarines.length);  // Check if marine was added
      expect(updatedMarines.find(m => m.id === newMarine.id)).toEqual(newMarine);  // Check if the new marine exists
      done();
    });
  });

  it('should update an existing space marine', (done: DoneFn) => {
    const updatedMarine = { id: 2, name: 'Gabriel Angelos', rank: 'Chapter Master', yearBorn: '539', chapter: 'Blood Ravens', isFallen: false };
    service.updateSpaceMarine(updatedMarine).subscribe((updatedMarines) => {
      const marine = updatedMarines.find(m => m.id === updatedMarine.id);
      expect(marine?.rank).toBe('Chapter Master');  // Check if the marine's rank was updated
      done();
    });
  });

  it('should delete a space marine by ID', (done: DoneFn) => {
    const marineId = 2;
    service.deleteSpaceMarine(marineId).subscribe((removedMarine) => {
      expect(removedMarine?.id).toBe(marineId);  // Check if the correct marine was deleted
      expect(spaceMarines.find(m => m.id === marineId)).toBeUndefined();  // Ensure the marine is no longer in the array
      done();
    });
  });

});
