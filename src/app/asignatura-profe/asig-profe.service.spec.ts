import { TestBed } from '@angular/core/testing';

import { AsigProfeService } from './asig-profe.service';

describe('AsigProfeService', () => {
  let service: AsigProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
