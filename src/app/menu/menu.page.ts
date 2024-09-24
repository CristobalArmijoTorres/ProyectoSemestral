import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario = 'Usuario1';

  // Imagen única
  image: string = 'assets/slide1.png'; // Cambia esto por la imagen que desees mostrar

  constructor(private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {}

  // Método para confirmar el cierre de sesión
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
            this.navController.navigateRoot(['/home']); // Redirigir a Home
          }
        }
      ]
    });
    await alert.present();
  }
}
