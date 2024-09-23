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
    //Cesar lo siguiente quiere decir que si no existe almenos una de las claves entrega el siguiente mensaje
    if (!this.clave1 || !this.clave2) {
      const toast = await this.toastController.create({
        message: 'Por favor, ingrese ambas claves',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    }//Si es distinto al email que deje por defecto para validación te da un mensaje
    else if (this.emailIngresado !== this.email) {
      const toast = await this.toastController.create({
        message: 'El email no es correcto, Inténtalo nuevamente',
        duration: 3000,
        position: "middle",
        color: "danger",
      });
      await toast.present();
    }//Si la clave 1 ingresada es distinta a la 2 te da un mensaje 
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
        message: 'Cambiando contraseña......',
        duration: 3000,
        position: "middle",
        color: "success",
      });
      await toast.present();
    }
  }
}
