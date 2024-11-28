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

  it('deberia mostrar toast si la clave actual es incorrecta', async () => {
    const toastSpy = spyOn(toastController, 'create').and.callThrough();  

    component.claveActual = 'wrongPassword';  
    component.claveIngresada1 = 'newPassword';
    component.claveIngresada2 = 'newPassword';

    await component.ingresar();  

    fixture.detectChanges();

    expect(toastSpy).toHaveBeenCalledWith({
      message: 'La clave actual es incorrecta.',
      duration: 3000,
      position: 'middle',
      color: 'danger'
    });  
  });



  

});
