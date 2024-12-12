import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { IonicModule, ToastController, AlertController, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModificarContrasenaService } from '../restablecer-contrasena/modificar-contrasena.service';
import { of, throwError } from 'rxjs';  

describe('RestablecerContrasenaPage', () => {
  let component: RestablecerContrasenaPage;
  let fixture: ComponentFixture<RestablecerContrasenaPage>;
  let modificarContrasenaService: ModificarContrasenaService;
  let toastController: ToastController;
  let alertController: AlertController;
  let navCtrl: NavController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        ModificarContrasenaService,
        ToastController,
        AlertController,
        NavController
      ]
    });

    fixture = TestBed.createComponent(RestablecerContrasenaPage);
    component = fixture.componentInstance;
    modificarContrasenaService = TestBed.inject(ModificarContrasenaService);
    toastController = TestBed.inject(ToastController);
    alertController = TestBed.inject(AlertController);
    navCtrl = TestBed.inject(NavController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar al metodo ingresar', () => {
    spyOn(component, 'ingresar');  
    const button = fixture.debugElement.nativeElement.querySelector('ion-button');  
    button.click();  
    expect(component.ingresar).toHaveBeenCalled();  
  });

  


  

});
