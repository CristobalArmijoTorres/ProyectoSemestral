import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuProfePage } from './menu-profe.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { BienvenidaProfeService } from './bienvenida-profe.service';  

describe('MenuProfePage', () => {
  let component: MenuProfePage;
  let fixture: ComponentFixture<MenuProfePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [BienvenidaProfeService]  
    });

    fixture = TestBed.createComponent(MenuProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
