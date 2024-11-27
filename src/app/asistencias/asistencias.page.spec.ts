import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciasPage } from './asistencias.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { RegAsistenciaService } from './reg-asistencia.service';  // Asegúrate de importar el servicio que usa HttpClient

describe('AsistenciasPage', () => {
  let component: AsistenciasPage;
  let fixture: ComponentFixture<AsistenciasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule aquí
      providers: [RegAsistenciaService]  // Asegúrate de que el servicio que usa HttpClient esté en los providers
    });

    fixture = TestBed.createComponent(AsistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
