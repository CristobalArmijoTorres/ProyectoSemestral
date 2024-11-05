import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarioIngresado = ''; 
  claveIngresada = '';
  usuario = 'Usuario1';
  clave = 'MiClav3';
  usuarioProfe = 'Profesor1';
  claveProfe = 'Profe123';

  constructor(
    private toastController: ToastController, 
    private navCtrol: NavController, 
    private alertController: AlertController
  ) {}

  ngOnInit() {}

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
    this.usuarioIngresado = this.usuarioIngresado;
    this.claveIngresada = this.claveIngresada;

    // Validación para usuario normal
    if (this.usuarioIngresado === this.usuario && this.claveIngresada === this.clave) {
      localStorage.setItem(this.usuarioIngresado, this.claveIngresada);
      const toast = await this.toastController.create({
        message: 'Ingresando......',
        duration: 1000,
        position: "middle", 
        color: "success",
      });
      await toast.present();
      this.navCtrol.navigateForward('/menu');
      
    // Validación para usuario profesor
    } else if (this.usuarioIngresado === this.usuarioProfe && this.claveIngresada === this.claveProfe) {
      localStorage.setItem(this.usuarioIngresado, this.claveIngresada);
      const toast = await this.toastController.create({
        message: 'Ingresando.....',
        duration: 1000,
        position: "middle", 
        color: "success",
      });
      await toast.present();
      this.navCtrol.navigateForward('#');  
    } else {
      const toast = await this.toastController.create({
        message: 'El usuario o la contraseña ingresada no es correcta, Inténtalo nuevamente',
        duration: 3000,
        position: "middle", 
        color: "danger",
      });
      await toast.present();
    }
  }
}
