import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { RegAsistenciaService } from './reg-asistencia.service';

describe('RegAsistenciaService', () => {
  let service: RegAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [RegAsistenciaService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(RegAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
