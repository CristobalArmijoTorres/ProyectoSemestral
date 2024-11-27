import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { BienvenidaService } from './bienvenida.service';

describe('BienvenidaService', () => {
  let service: BienvenidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [BienvenidaService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(BienvenidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
