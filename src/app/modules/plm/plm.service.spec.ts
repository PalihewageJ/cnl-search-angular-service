import { TestBed } from '@angular/core/testing';

import { PlmService } from './plm.service';

describe('PlmService', () => {
  let service: PlmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
