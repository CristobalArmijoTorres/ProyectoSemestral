import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciasPage } from './asistencias.page';
import { RegAsistenciaService } from '../asistencias/reg-asistencia.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { IonicModule } from '@ionic/angular';

describe('AsistenciasPage', () => {
  let component: AsistenciasPage;
  let fixture: ComponentFixture<AsistenciasPage>;
  let regAsistenciaService: RegAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [RegAsistenciaService],
    });

    fixture = TestBed.createComponent(AsistenciasPage);
    component = fixture.componentInstance;
    regAsistenciaService = TestBed.inject(RegAsistenciaService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('deberia manejar las asistencias vacías correctamente', () => {
    const groupedData: any[] = [];
    spyOn(regAsistenciaService, 'getAsistenciasByStudentIdGroupedByAsignatura').and.returnValue(of(groupedData));
    component.obtenerAsistenciasAgrupadas();
    expect(component.asistenciasAgrupadas).toEqual(groupedData);
  });

  
  it('debería manejar errores al obtener los datos de asistencia', () => {
    spyOn(regAsistenciaService, 'getAsistenciasByStudentIdGroupedByAsignatura').and.returnValue(throwError(() => new Error('Error')));
    component.obtenerAsistenciasAgrupadas();
    expect(component.asistenciasAgrupadas).toEqual([]);
  });


});
