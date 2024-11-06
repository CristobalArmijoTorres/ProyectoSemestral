import { TestBed } from '@angular/core/testing';

import { AsigAlumnoService } from './asig-alumno.service';

describe('AsigAlumnoService', () => {
  let service: AsigAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
