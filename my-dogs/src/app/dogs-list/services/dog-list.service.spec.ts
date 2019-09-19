import { TestBed } from '@angular/core/testing';

import { DogListService } from './dog-list.service';

describe('DogListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogListService = TestBed.get(DogListService);
    expect(service).toBeTruthy();
  });
});
