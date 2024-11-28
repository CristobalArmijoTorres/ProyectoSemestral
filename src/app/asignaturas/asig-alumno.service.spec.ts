import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasPage } from './asignaturas.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsigAlumnoService } from '../asignaturas/asig-alumno.service';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';

describe('AsignaturasPage', () => {
  let component: AsignaturasPage;
  let fixture: ComponentFixture<AsignaturasPage>;
  let asigAlumnoService: AsigAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [AsigAlumnoService],
    });

    fixture = TestBed.createComponent(AsignaturasPage);
    component = fixture.componentInstance;
    asigAlumnoService = TestBed.inject(AsigAlumnoService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia buscar profesores correctamente', () => {
    const profesores = [
      { profesorId: '1', nombre: 'Profesor1' },
      { profesorId: '2', nombre: 'Profesor2' }
    ];
    spyOn(asigAlumnoService, 'getAllProfesores').and.returnValue(of(profesores));

    component.cargarProfesores();
    expect(component.profesores['1']).toBe('Profesor1');
    expect(component.profesores['2']).toBe('Profesor2');
  });

 
  it('debería obtener el nombre correcto del profesor', () => {
    component.profesores = { '1': 'Profesor1', '2': 'Profesor2' };
    const professorName = component.obtenerNombreProfesor('1');
    expect(professorName).toBe('Profesor1');
  });

 
  it('debería devolver el id correcto de la asignatura', () => {
    const asignatura = { idAsig: '1', nombre: 'Arquitectura' };
    expect(asignatura.idAsig).toBe('1');
  });


  it('debería buscar el nombre del profesor correctamente', () => {
    spyOn(asigAlumnoService, 'getAllProfesores').and.returnValue(of([{ profesorId: '1', nombre: 'Profesor1' }]));
    component.cargarProfesores();
    expect(component.profesores['1']).toBe('Profesor1');
  });


  it('debería devolver "Desconocido" si no se encuentra el profesor', () => {
    const professorName = component.obtenerNombreProfesor('999');
    expect(professorName).toBe('Desconocido');
  });


  it('debe manejar el caso cuando no hay profesores disponibles', () => {
    spyOn(asigAlumnoService, 'getAllProfesores').and.returnValue(of([]));
    component.cargarProfesores();
    expect(Object.keys(component.profesores).length).toBe(0);
  });
});
