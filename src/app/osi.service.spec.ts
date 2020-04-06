import { TestBed } from '@angular/core/testing';

import { OsiService } from './osi.service';

describe('OsiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsiService = TestBed.get(OsiService);
    expect(service).toBeTruthy();
  });
});
