import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaProfePage } from './asignatura-profe.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { AsigProfeService } from './asig-profe.service';  // Asegúrate de importar el servicio que usa HttpClient

describe('AsignaturaProfePage', () => {
  let component: AsignaturaProfePage;
  let fixture: ComponentFixture<AsignaturaProfePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule aquí
      providers: [AsigProfeService]  // Proveer el servicio que podría estar usando HttpClient
    });

    fixture = TestBed.createComponent(AsignaturaProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
