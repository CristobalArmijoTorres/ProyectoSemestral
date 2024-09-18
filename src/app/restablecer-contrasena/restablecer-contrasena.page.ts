import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  mostrar = false;
  emailIngresado = ''; 
  email1 = '';
  email = 'Usuario1@gmail.com';
  clave1 = '';
  clave2= '';
  claveIngresada1 = '';
  claveIngresada2 = '';

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async ingresar() {
    this.emailIngresado = this.email1;
    this.clave1 = this.claveIngresada1;
    this.clave2 = this.claveIngresada2;

    if (!this.clave1 || !this.clave2) {
      const toast = await this.toastController.create({
        message: 'Por favor, ingrese ambas claves',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    }
    else if (this.emailIngresado !== this.email) {
      const toast = await this.toastController.create({
        message: 'El email no es correcto, Inténtalo nuevamente',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    }
    else if (this.clave1 !== this.clave2) {
      const toast = await this.toastController.create({
        message: 'Las claves no coinciden, Inténtalo nuevamente',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Ingresando......',
        duration: 3000,
        position: "middle",
        color: "success",
      });
      await toast.present();
    }
  }
}
