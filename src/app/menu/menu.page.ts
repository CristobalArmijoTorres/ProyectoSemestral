import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario = 'Usuario1';

  constructor(private navController: NavController,private alertController: AlertController) { }  

  ngOnInit() {}

  // Aqui se muestra la alerta de cerrar sesion
  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',  
      message: '¿Está seguro que desea salir?', 
      buttons: [
        {
          text: 'Cancelar', 
          role: 'cancel'
        },
        {
          text: 'Aceptar',  
          handler: () => {
            this.navController.navigateRoot(['/home']);  // Redirigir a Home y root para que no pueda devolverse, en teoria
          }
        }
      ]
    });
    await alert.present();  



    
  }
}
