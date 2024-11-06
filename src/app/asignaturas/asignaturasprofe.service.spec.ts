import { TestBed } from '@angular/core/testing';

import { AsignaturasprofeService } from './asignaturasprofe.service';

describe('AsignaturasprofeService', () => {
  let service: AsignaturasprofeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturasprofeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
