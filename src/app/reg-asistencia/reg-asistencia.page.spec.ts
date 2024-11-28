import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegAsistenciaPage } from './reg-asistencia.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { RegistrarService } from './registrar.service';  
import { of } from 'rxjs';

describe('RegAsistenciaPage', () => {
  let component: RegAsistenciaPage;
  let fixture: ComponentFixture<RegAsistenciaPage>;
  let registrarService: RegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [RegistrarService]  
    });

    fixture = TestBed.createComponent(RegAsistenciaPage);
    component = fixture.componentInstance;
    registrarService = TestBed.inject(RegistrarService);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería buscar secciones correctamente', () => {
    const secciones = [{ id: 'A', nombre: 'Sección A' }];
    spyOn(registrarService, 'getSecciones').and.returnValue(of(secciones));

    component.cargarSecciones();
    expect(component.secciones.length).toBe(1);
    expect(component.secciones[0].nombre).toBe('Sección A');
  });

  it('debería generar el QR correctamente', () => {
    const asignatura = { idAsig: '1', nombre: 'Matemáticas', seccionSeleccionada: 'A' };
    component.secciones = [{ id: 'A', nombre: 'Sección A' }];
    spyOn(component, 'verModal');

    component.generarQR(asignatura);
    expect(component.qrData).toBeDefined();
    expect(component.qrData).toContain('asignaturaId');
    expect(component.qrData).toContain('seccionId');
    expect(component.verModal).toHaveBeenCalled();
  });

  it('debería alternar la visibilidad del modal', () => {
    component.mostrar = false;
    component.verModal();
    expect(component.mostrar).toBe(true);
    component.verModal();
    expect(component.mostrar).toBe(false);
  });

  it('debería mostrar el QR del modal solo cuando se genera el QR', () => {
    component.generarQR({ idAsig: '1', nombre: 'Matemáticas', seccionSeleccionada: 'A' });
    fixture.detectChanges();
    const modal = fixture.debugElement.nativeElement.querySelector('ion-modal');
    expect(modal).toBeTruthy();
  });

});
