import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { ModificarContrasenaService } from '../restablecer-contrasena/modificar-contrasena.service';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  claveActual = '';
  claveIngresada1 = '';
  claveIngresada2 = '';

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modificarContrasenaService: ModificarContrasenaService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async ingresar() {
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    
    if (this.claveActual !== usuario.password) {
      const toast = await this.toastController.create({
        message: 'La clave actual es incorrecta.',
        duration: 3000,
        position: 'middle',
        color: 'danger',
      });
      await toast.present();
      return;
    }

    
    if (this.claveIngresada1 !== this.claveIngresada2) {
      const toast = await this.toastController.create({
        message: 'Las nuevas claves no coinciden.',
        duration: 3000,
        position: 'middle',
        color: 'danger',
      });
      await toast.present();
      return;
    }

    
    this.modificarContrasenaService.updatePassword(usuario.id, this.claveIngresada1).subscribe(
      async () => {
        const toast = await this.toastController.create({
          message: 'Contraseña cambiada exitosamente.',
          duration: 2000,
          position: 'middle',
          color: 'success',
        });
        await toast.present();

        
        localStorage.removeItem('user');
        this.navCtrl.navigateRoot('/home');
      },
      async () => {
        const toast = await this.toastController.create({
          message: 'Hubo un error al cambiar la contraseña, inténtalo nuevamente.',
          duration: 3000,
          position: 'middle',
          color: 'danger',
        });
        await toast.present();
      }
    );
  }
}
