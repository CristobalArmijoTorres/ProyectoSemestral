import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarioIngresado = ''; 
  claveIngresada = '';

  constructor(
    private toastController: ToastController, 
    private navCtrol: NavController, 
    private alertController: AlertController,
    private userService: UserService
  ) {}

  async funcionAlerta() {
    const alert = await this.alertController.create({
      header: "¿Olvidaste tu contraseña?",
      subHeader: "Tranquilo, se enviará un mensaje a tu correo para recuperarla",
      message: "El mensaje se envió correctamente, ahora podrás recuperar tu contraseña",
      buttons: ['Ok']
    });
    await alert.present();
  }

  async ingresar() {
    console.log('Usuario ingresado:', this.usuarioIngresado);
    console.log('Clave ingresada:', this.claveIngresada);
  
    this.userService.login(this.usuarioIngresado, this.claveIngresada).subscribe(
      async (response) => {
        if (response.success) {
          console.log('Usuario encontrado:', response.user);
          localStorage.setItem('user', JSON.stringify(response.user));
          const toast = await this.toastController.create({
            message: 'Ingresando...',
            duration: 1000,
            position: "middle",
            color: "success",
          });
          await toast.present();
  
          if (response.user.role === 'profesor') {
            this.navCtrol.navigateForward('/menu-profe');
          } else {
            this.navCtrol.navigateForward('/menu');
          }
        } else {
          const toast = await this.toastController.create({
            message: 'El usuario o la contraseña ingresada no es correcta, inténtalo nuevamente',
            duration: 3000,
            position: "middle",
            color: "danger",
          });
          await toast.present();
        }
      },
      async (error) => {
        console.error('Error al conectar con el servidor:', error);
        const toast = await this.toastController.create({
          message: 'Hubo un error al conectar con el servidor, inténtalo nuevamente',
          duration: 3000,
          position: "middle",
          color: "danger",
        });
        await toast.present();
      }
    );
  }
  
}
