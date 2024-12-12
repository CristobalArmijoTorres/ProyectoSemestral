import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { ModificarContrasenaService } from './modificar-contrasena.service'; 

describe('RestablecerContrasenaPage', () => {
  let component: RestablecerContrasenaPage;
  let fixture: ComponentFixture<RestablecerContrasenaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ModificarContrasenaService]  
    });

    fixture = TestBed.createComponent(RestablecerContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
