import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { RegistrarService } from './registrar.service';

describe('RegistrarService', () => {
  let service: RegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [RegistrarService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(RegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
