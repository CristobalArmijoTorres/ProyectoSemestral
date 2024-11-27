import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { AsigProfeService } from './asig-profe.service';

describe('AsigProfeService', () => {
  let service: AsigProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [AsigProfeService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(AsigProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
