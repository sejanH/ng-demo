import { TestBed } from '@angular/core/testing';

import { DemodbService } from './demodb.service';

describe('DemodbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemodbService = TestBed.get(DemodbService);
    expect(service).toBeTruthy();
  });
});
