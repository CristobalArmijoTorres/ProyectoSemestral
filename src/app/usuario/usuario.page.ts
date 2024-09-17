import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  mostrar = false;
  usuarioIngresado = ''; 
  usuario = '';
  claveIngresada = '';
  clave = '';


  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }
  async ingresar()
  {
    this.usuarioIngresado = this.usuario;
    this.claveIngresada = this.clave;

    if(this.usuarioIngresado !== 'Usuario1' && this.claveIngresada !== 'Usuario1')
    {
        const toast = await this.toastController.create({
        message:'El usuario o la contraseña ingresada no es correcta, Intentalo nuevamente' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "danger",
      });
      await toast.present();
    }
    else
    {
      const toast = await this.toastController.create({
        message:'Ingresando......' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "success",
      });
      await toast.present();
    }
  }
}
