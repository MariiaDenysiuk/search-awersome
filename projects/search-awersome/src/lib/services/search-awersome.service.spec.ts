import { TestBed } from '@angular/core/testing';

import { SearchAwersomeService } from './search-awersome.service';

describe('SearchAwersomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchAwersomeService = TestBed.get(SearchAwersomeService);
    expect(service).toBeTruthy();
  });
});
