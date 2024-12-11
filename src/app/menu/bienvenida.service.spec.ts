import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { BienvenidaService } from './bienvenida.service';

describe('BienvenidaService', () => {
  let service: BienvenidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [BienvenidaService]  
    });
    service = TestBed.inject(BienvenidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
