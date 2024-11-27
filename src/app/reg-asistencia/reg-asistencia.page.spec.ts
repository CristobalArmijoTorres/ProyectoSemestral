import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegAsistenciaPage } from './reg-asistencia.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { RegistrarService } from './registrar.service';  // Asegúrate de importar el servicio que usa HttpClient

describe('RegAsistenciaPage', () => {
  let component: RegAsistenciaPage;
  let fixture: ComponentFixture<RegAsistenciaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule aquí
      providers: [RegistrarService]  // Asegúrate de que el servicio esté en los providers si el componente lo usa
    });

    fixture = TestBed.createComponent(RegAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
