import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
//el NavController sirve para redirigirte a la pagina siempre y cuando los datos sean correctos
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  mostrar = false;
  usuarioIngresado = ''; 
  usuario = 'Usuario1';
  claveIngresada = '';
  clave = 'MiClav3';
  constructor(private toastController:ToastController, private navCtrol:NavController) {}
  ngOnInit() {
  }
  async ingresar()
  {
    this.usuarioIngresado = this.usuarioIngresado;
    this.claveIngresada = this.claveIngresada;

    if(this.usuarioIngresado !== this.usuario ||  this.claveIngresada !== this.clave)
      {
          const toast = await this.toastController.create({
        message:'El usuario o la contraseña ingresada no es correcta, Intentalo nuevamente' ,
        duration: 3000,
        position:"middle", 
        color : "danger",
      });
      await toast.present();

    }
    else
    {
      const toast = await this.toastController.create({
        message:'Ingresando......' ,
        duration: 3000,
        position:"middle", 
        color : "success",
      });
      await toast.present();
      this.navCtrol.navigateForward('/menu');//aqui va a ir donde se va a dirigir al validar los datos 
    }
  }

}



