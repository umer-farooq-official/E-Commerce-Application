import { TestBed } from '@angular/core/testing';

import { ParseService } from './parse.service';

describe('ParseService', () => {
  let service: ParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
