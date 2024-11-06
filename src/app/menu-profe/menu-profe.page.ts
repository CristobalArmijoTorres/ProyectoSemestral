import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu-profe',
  templateUrl: './menu-profe.page.html',
  styleUrls: ['./menu-profe.page.scss'],
})
export class MenuProfePage implements OnInit {
  usuario = 'Profesor1';

  // Imagen 
  image: string = 'assets/slide1.png'; 

  constructor(private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {}

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
            this.navController.navigateRoot(['/home']); 
          }
        }
      ]
    });
    await alert.present();
  }
}
