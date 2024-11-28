import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasPage } from './asignaturas.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { AsigAlumnoService } from './asig-alumno.service';  

describe('AsignaturasPage', () => {
  let component: AsignaturasPage;
  let fixture: ComponentFixture<AsignaturasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [AsigAlumnoService]  
    });

    fixture = TestBed.createComponent(AsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
