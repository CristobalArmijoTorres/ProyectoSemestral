import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasPage } from './asignaturas.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { AsigAlumnoService } from './asig-alumno.service';  // Asegúrate de que el servicio se importa correctamente

describe('AsignaturasPage', () => {
  let component: AsignaturasPage;
  let fixture: ComponentFixture<AsignaturasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Asegúrate de incluir HttpClientTestingModule aquí
      providers: [AsigAlumnoService]  // Asegúrate de que el servicio se provea si el componente depende de él
    });

    fixture = TestBed.createComponent(AsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
