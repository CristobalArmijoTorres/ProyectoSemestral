import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Asegúrate de importar HttpClientTestingModule
import { BienvenidaService } from './bienvenida.service';  // Asegúrate de importar el servicio si es necesario

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Añadir HttpClientTestingModule aquí
      providers: [BienvenidaService]  // Asegúrate de que el servicio esté en los providers si el componente lo usa
    });

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
