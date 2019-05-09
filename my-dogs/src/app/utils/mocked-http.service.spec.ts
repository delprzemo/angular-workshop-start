import { TestBed } from '@angular/core/testing';

import { MockedHttpService } from './mocked-http.service';

describe('MockedHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockedHttpService = TestBed.get(MockedHttpService);
    expect(service).toBeTruthy();
  });
});
