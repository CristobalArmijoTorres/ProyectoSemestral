import { TestBed } from '@angular/core/testing';

import { BienvenidaProfeService } from './bienvenida-profe.service';

describe('BienvenidaProfeService', () => {
  let service: BienvenidaProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienvenidaProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
