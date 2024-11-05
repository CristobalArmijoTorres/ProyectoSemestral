import { TestBed } from '@angular/core/testing';

import { ModificarContrasenaService } from './modificar-contrasena.service';

describe('ModificarContrasenaService', () => {
  let service: ModificarContrasenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarContrasenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
