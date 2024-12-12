import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { RegistrarService } from './registrar.service';

describe('RegistrarService', () => {
  let service: RegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [RegistrarService]  
    });
    service = TestBed.inject(RegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
