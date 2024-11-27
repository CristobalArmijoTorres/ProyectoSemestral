import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { IonicModule, ToastController, NavController, AlertController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { of } from 'rxjs';  

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let userService: UserService;
  let alertController: AlertController;
  let toastController: ToastController;
  let navCtrl: NavController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],  
      providers: [UserService, AlertController, ToastController, NavController]
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    alertController = TestBed.inject(AlertController);
    toastController = TestBed.inject(ToastController);
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



 
  it('deberia mostrar un toast cuando el login falle', async () => {
    const loginResponse = { success: false, user: null };
    spyOn(userService, 'login').and.returnValue(of(loginResponse));  
    const toastSpy = spyOn(toastController, 'create').and.callThrough();  

    component.usuarioIngresado = 'user';
    component.claveIngresada = 'wrongPassword';

    await component.ingresar();  

    fixture.detectChanges();

    expect(toastSpy).toHaveBeenCalledWith({
      message: 'El usuario o la contraseña ingresada no es correcta, inténtalo nuevamente',
      duration: 3000,
      position: "middle",
      color: "danger",
    });  
  });
});
