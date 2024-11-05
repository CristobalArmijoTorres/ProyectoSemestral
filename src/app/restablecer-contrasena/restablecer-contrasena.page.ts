import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  mostrar = false;
  clave1 = '';
  clave2 = '';
  claveIngresada1 = '';
  claveIngresada2 = '';
  claveActual = '';
  claveA = '';

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {}

  async ingresar() {
    this.clave1 = this.claveIngresada1;
    this.clave2 = this.claveIngresada2;

    // Verificaciones de los campos
    if (!this.clave1 || !this.clave2) {
      const toast = await this.toastController.create({
        message: 'Por favor, ingrese ambas claves',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    } else if (this.clave1 !== this.clave2) {
      const toast = await this.toastController.create({
        message: 'Las claves no coinciden, Inténtalo nuevamente',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    } else {
      // Alerta indicando que la clave fue cambiada
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'La clave fue cambiada correctamente.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
}
