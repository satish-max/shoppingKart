import { TestBed } from '@angular/core/testing';

import { SearchapiService } from './searchapi.service';

describe('SearchapiService', () => {
  let service: SearchapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
