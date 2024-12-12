import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciasPage } from './asistencias.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { AsigAlumnoService } from './reg-asistencia.service';  

describe('AsistenciasPage', () => {
  let component: AsistenciasPage;
  let fixture: ComponentFixture<AsistenciasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [AsigAlumnoService]  
    });

    fixture = TestBed.createComponent(AsistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
