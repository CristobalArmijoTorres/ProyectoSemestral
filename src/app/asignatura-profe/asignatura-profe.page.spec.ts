import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaProfePage } from './asignatura-profe.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { AsigProfeService } from './asig-profe.service';  

describe('AsignaturaProfePage', () => {
  let component: AsignaturaProfePage;
  let fixture: ComponentFixture<AsignaturaProfePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AsigProfeService]  
    });

    fixture = TestBed.createComponent(AsignaturaProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
