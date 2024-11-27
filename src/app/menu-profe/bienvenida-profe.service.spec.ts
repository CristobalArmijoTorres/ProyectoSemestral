import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { BienvenidaProfeService } from './bienvenida-profe.service';

describe('BienvenidaProfeService', () => {
  let service: BienvenidaProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [BienvenidaProfeService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(BienvenidaProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
