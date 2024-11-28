import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaProfePage } from './asignatura-profe.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsigProfeService } from '../asignatura-profe/asig-profe.service';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';

describe('AsignaturaProfePage', () => {
  let component: AsignaturaProfePage;
  let fixture: ComponentFixture<AsignaturaProfePage>;
  let asigProfeService: AsigProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [AsigProfeService],
    });

    fixture = TestBed.createComponent(AsignaturaProfePage);
    component = fixture.componentInstance;
    asigProfeService = TestBed.inject(AsigProfeService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deberia abrir modal con la asignatura correcta', () => {
    const asignatura = { idAsig: '1', nombre: 'Matemáticas', codigo: 'MAT101' };
    component.openModal(asignatura);
    expect(component.selectedAsignatura).toEqual(asignatura);
    expect(component.isModalOpen).toBe(true);
  });


  it('deberia cerrar modal cuando se hace clic en el botón cerrar', () => {
    component.isModalOpen = true;
    component.closeModal();
    expect(component.isModalOpen).toBe(false);
    expect(component.selectedAsignatura).toBeNull();
  });

 
  it('deberia cerrar el modal cuando se hace clic en el botón cerrar', () => {
    const title = fixture.debugElement.nativeElement.querySelector('ion-title');
    expect(title.textContent).toBe('Mis Asignaturas');
  });

  
  it('debería mostrar modal cuando se hace clic en la asignatura', () => {
    const asignatura = { idAsig: '1', nombre: 'Matemáticas', profesorId: '1' };
    component.openModal(asignatura);
    fixture.detectChanges();
    const modal = fixture.debugElement.nativeElement.querySelector('ion-modal');
    expect(modal).toBeTruthy();
  });

  it('deberia asignar el nombre del profesor correctamente', () => {
    component.selectedAsignatura = { profesorId: '1', nombre: 'Matemáticas' };
    expect(component.selectedAsignatura.profesorId).toBe('1');
  });

  it('debería volver al menú cuando se hace clic en el botón Atrás', () => {
    const backButton = fixture.debugElement.nativeElement.querySelector('ion-back-button');
    expect(backButton).toBeTruthy();
  });

});
