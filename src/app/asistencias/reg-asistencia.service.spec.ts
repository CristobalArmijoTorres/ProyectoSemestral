import { TestBed } from '@angular/core/testing';

import { RegAsistenciaService } from './reg-asistencia.service';

describe('RegAsistenciaService', () => {
  let service: RegAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
