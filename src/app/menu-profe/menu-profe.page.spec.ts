import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuProfePage } from './menu-profe.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule
import { BienvenidaProfeService } from './bienvenida-profe.service';  // Asegúrate de importar el servicio que usa HttpClient

describe('MenuProfePage', () => {
  let component: MenuProfePage;
  let fixture: ComponentFixture<MenuProfePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule aquí
      providers: [BienvenidaProfeService]  // Asegúrate de que el servicio esté en los providers si el componente lo usa
    });

    fixture = TestBed.createComponent(MenuProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
