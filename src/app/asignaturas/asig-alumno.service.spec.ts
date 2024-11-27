import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { AsigAlumnoService } from './asig-alumno.service';

describe('AsigAlumnoService', () => {
  let service: AsigAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [AsigAlumnoService]  // Provee el servicio que se va a probar
    });
    service = TestBed.inject(AsigAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
