import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { BienvenidaProfeService } from './bienvenida-profe.service';

describe('BienvenidaProfeService', () => {
  let service: BienvenidaProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [BienvenidaProfeService]  
    });
    service = TestBed.inject(BienvenidaProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
