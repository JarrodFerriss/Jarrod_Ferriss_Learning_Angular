import { TestBed } from '@angular/core/testing';

import { SpaceMarineService } from './space-marine.service';

describe('SpaceMarineService', () => {
  let service: SpaceMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
